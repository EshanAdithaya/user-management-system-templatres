import React, { useState } from 'react';
import { BookOpen, Plus, Users, Calendar, Clock, MoreVertical, Edit, Trash2 } from 'lucide-react';

const CourseManagement = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const courses = [
    {
      id: 1,
      name: 'Basic Modeling',
      description: 'Introduction to modeling fundamentals and runway basics',
      duration: '3 months',
      fee: 75000,
      students: 24,
      batches: 2,
      status: 'active'
    },
    {
      id: 2,
      name: 'Advanced Modeling',
      description: 'Professional modeling techniques and portfolio development',
      duration: '6 months',
      fee: 125000,
      students: 18,
      batches: 1,
      status: 'active'
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Course
        </button>
      </div>

      {/* Course Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Courses</p>
              <p className="text-2xl font-semibold text-gray-900">4</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Students</p>
              <p className="text-2xl font-semibold text-gray-900">42</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Batches</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Duration</p>
              <p className="text-2xl font-semibold text-gray-900">4.5m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{course.description}</p>
                </div>
                <div className="relative">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Duration</p>
                  <p className="mt-1 text-sm text-gray-900">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Course Fee</p>
                  <p className="mt-1 text-sm text-gray-900">₨{course.fee.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Students</p>
                  <p className="mt-1 text-sm text-gray-900">{course.students}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Batches</p>
                  <p className="mt-1 text-sm text-gray-900">{course.batches}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
              <div className="flex justify-between items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-200 rounded-full">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded-full">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;