/** @format */
"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AddCheckListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: string) => void;
}

const AddCheckListModal: React.FC<AddCheckListModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [task, setTask] = useState("");

  const handleSave = () => {
    if (task.trim()) {
      onSave(task);
      setTask("");
      onClose();
    }
  };

  const handleCancel = () => {
    setTask("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-md  p-0 gap-0">
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <DialogTitle className="text-center text-base sm:text-lg md:text-xl font-semibold text-gray-800">
            Add Checklist
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
          {/* Task Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="task"
                className="text-xs sm:text-sm font-medium text-gray-700"
              >
                Task
              </label>
            </div>
            <Input
              id="task"
              type="text"
              placeholder="Enter checklist task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSave();
                }
              }}
              className="w-full text-xs sm:text-sm h-9 sm:h-10"
            />
            <p className="text-xs sm:text-sm text-right font-medium text-red-600 hover:text-red-700 transition-colors">
              Add Task
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleCancel}
              variant="outline"
              className="flex-1 h-8 sm:h-9 text-xs sm:text-sm border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 h-8 sm:h-9 text-xs sm:text-sm bg-red-800 hover:bg-red-700 text-white"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCheckListModal;
