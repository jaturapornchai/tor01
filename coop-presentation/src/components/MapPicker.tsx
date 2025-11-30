"use client";

import { useState, useEffect, useCallback } from "react";

interface MapPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (lat: number, lng: number) => void;
  initialLat?: number;
  initialLng?: number;
}

export default function MapPicker({
  isOpen,
  onClose,
  onSelectLocation,
  initialLat = 13.7563,
  initialLng = 100.5018,
}: MapPickerProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [MapComponent, setMapComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setPosition(initialLat && initialLng ? [initialLat, initialLng] : null);

      // Dynamically import the map component
      import("./MapContent").then((mod) => {
        setMapComponent(() => mod.default);
      });
    }
  }, [isOpen, initialLat, initialLng]);

  const handleConfirm = () => {
    if (position) {
      onSelectLocation(position[0], position[1]);
      onClose();
    }
  };

  const handlePositionChange = useCallback((lat: number, lng: number) => {
    setPosition([lat, lng]);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">
            เลือกตำแหน่งบนแผนที่
          </h3>
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
          {MapComponent ? (
            <MapComponent
              center={[initialLat, initialLng]}
              position={position}
              onPositionChange={handlePositionChange}
            />
          ) : (
            <div className="h-full flex items-center justify-center bg-slate-100">
              <div className="text-center">
                <svg className="w-12 h-12 text-slate-400 mx-auto mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-slate-500">กำลังโหลดแผนที่...</p>
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
                  <span className="font-mono text-indigo-600">
                    {position[0].toFixed(6)}, {position[1].toFixed(6)}
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
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ยืนยันตำแหน่ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
