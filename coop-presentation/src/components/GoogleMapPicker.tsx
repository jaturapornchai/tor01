"use client";

import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

interface GoogleMapPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (lat: number, lng: number) => void;
  initialLat?: number;
  initialLng?: number;
}

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

export default function GoogleMapPicker({
  isOpen,
  onClose,
  onSelectLocation,
  initialLat = 13.7563,
  initialLng = 100.5018,
}: GoogleMapPickerProps) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    initialLat && initialLng ? { lat: initialLat, lng: initialLng } : null
  );

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = {
    lat: initialLat,
    lng: initialLng,
  };

  const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setPosition({ lat, lng });
    }
  }, []);

  const handleConfirm = () => {
    if (position) {
      onSelectLocation(position.lat, position.lng);
      onClose();
    }
  };

  if (!isOpen) return null;

  if (loadError) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 p-6">
          <p className="text-red-600">Error loading Google Maps</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-slate-200 rounded-lg">
            ปิด
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              เลือกตำแหน่งบน Google Maps
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Map */}
        <div className="h-[400px] relative">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
              onClick={onMapClick}
              options={{
                streetViewControl: false,
                mapTypeControl: true,
                fullscreenControl: false,
              }}
            >
              {position && <Marker position={position} />}
            </GoogleMap>
          ) : (
            <div className="h-full flex items-center justify-center bg-slate-100">
              <div className="text-center">
                <svg className="w-12 h-12 text-slate-400 mx-auto mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-slate-500">กำลังโหลด Google Maps...</p>
              </div>
            </div>
          )}
        </div>

        {/* Selected coordinates */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              {position ? (
                <p className="text-sm text-slate-600">
                  <span className="font-medium">พิกัดที่เลือก:</span>{" "}
                  <span className="font-mono text-red-600">
                    {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
                  </span>
                </p>
              ) : (
                <p className="text-sm text-slate-500">คลิกบนแผนที่เพื่อเลือกตำแหน่ง</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirm}
                disabled={!position}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                ยืนยันตำแหน่ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
