/** @format */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileEditModal from "./ProfileEditModal";
import ResetPassModal from "./ResetPassModal";

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    fullName: "Malik Rahman Mihad",
    email: "name@gmail.com",
    contactNumber: "+1 345 824 9384",
    address: "24 New Street, Los Angeles",
    role: "Technician",
    password: "************",
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isResetPassModalOpen, setIsResetPassModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = (data: {
    fullName: string;
    contactNumber: string;
    address: string;
  }) => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  const handleChangePassword = () => {
    setIsResetPassModalOpen(true);
  };

  const handleUpdatePassword = (newPassword: string) => {
    console.log("Password updated:", newPassword);
    // Add your password update logic here
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/logo.png"
              alt="Profile"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {formData.fullName}
            </h2>
            <p className="text-gray-500 text-sm">{formData.role}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleEdit}
            className="bg-red-800 hover:bg-red-700 text-white flex items-center gap-2 px-6"
          >
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button
            onClick={handleChangePassword}
            className="bg-[#5C3D2E] hover:bg-[#4A2F22] text-white flex items-center gap-2 px-6"
          >
            Change Password
          </Button>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your First Name"
            className="bg-white border-gray-200 h-10"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@gmail.com"
            className="bg-white border-gray-200 h-10"
          />
        </div>

        {/* Contact Number */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <Input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="+1 345 824 9384"
            className="bg-white border-gray-200 h-10"
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Address</label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="24 New Street, Los Angeles"
            className="bg-white border-gray-200 h-10"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Role</label>
          <Input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Technician"
            className="bg-white border-gray-200 h-10"
            disabled
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="************"
              className="bg-white border-gray-200 pr-10 h-10"
              disabled
            />
            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentData={{
          fullName: formData.fullName,
          contactNumber: formData.contactNumber,
          address: formData.address,
        }}
        onSave={handleSaveChanges}
      />

      {/* Reset Password Modal */}
      <ResetPassModal
        isOpen={isResetPassModalOpen}
        onClose={() => setIsResetPassModalOpen(false)}
        onUpdate={handleUpdatePassword}
      />
    </div>
  );
};

export default ProfileSection;
