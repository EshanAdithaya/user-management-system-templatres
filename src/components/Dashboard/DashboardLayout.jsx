// src/components/DashboardLayout.jsx
import React, { useState } from 'react';
import { Users, CreditCard, Calendar } from 'lucide-react';
import Sidebar from '../Sidebar';
import TopBar from '../TopBar';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Quick Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">1,234</p>
              <p className="mt-2 text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Active Batches</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
              <p className="mt-2 text-sm text-gray-600">Across all courses</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Today's Attendance</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">92%</p>
              <p className="mt-2 text-sm text-green-600">Above target</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Revenue This Month</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">₨285K</p>
              <p className="mt-2 text-sm text-gray-600">Updated just now</p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New student registration</p>
                  <p className="text-sm text-gray-500">Sarah Connor joined Basic Modeling course</p>
                  <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Payment received</p>
                  <p className="text-sm text-gray-500">₨25,000 received for Advanced Course</p>
                  <p className="text-xs text-gray-400 mt-1">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Attendance marked</p>
                  <p className="text-sm text-gray-500">Batch A-101 attendance completed</p>
                  <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;