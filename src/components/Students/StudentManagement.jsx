// src/components/students/StudentManagement.jsx
import React, { useState } from 'react';
import { 
  Search, Filter, Plus, MoreVertical, Eye, Edit, Trash2, X, 
  ChevronDown, Download, Upload, Mail, Phone, AlertCircle,
  UserPlus, FileText, Calendar, Check
} from 'lucide-react';

const StudentManagement = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const students = [
    {
      id: 1,
      name: "Sarah Connor",
      email: "sarah@example.com",
      course: "Basic Modeling",
      batch: "A-101",
      status: "active",
      joinedDate: "2024-01-01",
      phone: "+94 77 123 4567",
      address: "123 Main St, Colombo",
      emergencyContact: "John Connor (+94 77 890 1234)",
      feesStatus: "paid",
      attendance: "85%",
      recentActivity: [
        { type: 'attendance', date: '2024-01-15', details: 'Marked present' },
        { type: 'payment', date: '2024-01-10', details: 'Monthly fee paid' },
      ]
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      course: "Advanced Modeling",
      batch: "B-201",
      status: "active",
      joinedDate: "2024-01-05",
      phone: "+94 77 456 7890",
      address: "456 Lake Road, Colombo",
      emergencyContact: "Jane Smith (+94 77 123 4567)",
      feesStatus: "pending",
      attendance: "92%",
      recentActivity: [
        { type: 'course', date: '2024-01-14', details: 'Completed Module 3' },
        { type: 'attendance', date: '2024-01-13', details: 'Marked present' },
      ]
    }
  ];

  const StudentDetailsModal = ({ student, onClose }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-lg bg-white">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xl font-medium text-blue-600">
                {student.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{student.name}</h3>
              <p className="text-gray-500">{student.course} - {student.batch}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <div className="flex items-center mt-1">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <p className="text-sm text-gray-900">{student.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <div className="flex items-center mt-1">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <p className="text-sm text-gray-900">{student.phone}</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-sm text-gray-900 mt-1">{student.address}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Emergency Contact</p>
                  <p className="text-sm text-gray-900 mt-1">{student.emergencyContact}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h4>
              <div className="space-y-4">
                {student.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${activity.type === 'attendance' ? 'bg-green-100' : 
                        activity.type === 'payment' ? 'bg-blue-100' : 'bg-yellow-100'}`}>
                      {activity.type === 'attendance' ? 
                        <Check className="h-4 w-4 text-green-600" /> :
                        activity.type === 'payment' ?
                        <FileText className="h-4 w-4 text-blue-600" /> :
                        <Calendar className="h-4 w-4 text-yellow-600" />
                      }
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.details}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="text-sm font-medium text-gray-500 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500">Attendance</span>
                    <span className="text-sm font-medium text-gray-900">{student.attendance}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: student.attendance }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fees Status</p>
                  <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${student.feesStatus === 'paid' ? 
                      'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {student.feesStatus.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Join Date</p>
                  <p className="text-sm font-medium text-gray-900">{student.joinedDate}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FileText className="h-4 w-4 mr-2" />
                View Reports
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FilterPanel = () => (
    <div className="bg-white rounded-lg shadow-lg p-4 absolute right-0 top-12 w-72 z-10 border">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>All Courses</option>
            <option>Basic Modeling</option>
            <option>Advanced Modeling</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>All Batches</option>
            <option>A-101</option>
            <option>B-201</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
          <input 
            type="date" 
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            Reset
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <UserPlus className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total Students</p>
              <p className="text-lg font-semibold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Active Students</p>
              <p className="text-lg font-semibold text-gray-900">1,180</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Pending Fees</p>
              <p className="text-lg font-semibold text-gray-900">54</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">New This Month</p>
              <p className="text-lg font-semibold text-gray-900">45</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </button>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Student
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search students by name, email, or batch..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="relative">
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>
          {filterOpen && <FilterPanel />}
        </div>
      </div>

      {/* Bulk Actions Bar - Shows when items are selected */}
      {selectedStudents.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">
              {selectedStudents.length} students selected
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              Send Email
            </button>
            <button className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              Export Data
            </button>
            <button className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700">
              Delete Selected
            </button>
          </div>
        </div>
      )}

      {/* Student Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedStudents(students.map(s => s.id));
                      } else {
                        setSelectedStudents([]);
                      }
                    }}
                  />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course & Batch
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fees Status
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedStudents.includes(student.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedStudents([...selectedStudents, student.id]);
                      } else {
                        setSelectedStudents(selectedStudents.filter(id => id !== student.id));
                      }
                    }}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                      <div className="text-sm text-gray-500">{student.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.course}</div>
                  <div className="text-sm text-gray-500">Batch: {student.batch}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-1 h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: student.attendance }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{student.attendance}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${student.feesStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                  >
                    {student.feesStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button 
                      onClick={() => {
                        setSelectedStudent(student);
                        setViewModalOpen(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <Eye className="h-4 w-4 text-gray-500" />
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedStudent(student);
                        setIsFormOpen(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <Edit className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow">
        <div className="flex flex-1 justify-between sm:hidden">
          <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                3
              </button>
              <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Student Form Modal */}
      {isFormOpen && (
        <StudentForm 
          onClose={() => {
            setIsFormOpen(false);
            setSelectedStudent(null);
          }}
          student={selectedStudent}
        />
      )}

      {/* Student Details Modal */}
      {isViewModalOpen && (
        <StudentDetailsModal 
          student={selectedStudent}
          onClose={() => {
            setViewModalOpen(false);
            setSelectedStudent(null);
          }}
        />
      )}
    </div>
  );
};

export default StudentManagement;