import React, { useState, useEffect } from 'react';
import { Bell, Mail, MessageSquare, Send, Users, Filter, Search, Trash2, AlertCircle, X } from 'lucide-react';

const CommunicationSystem = () => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [showComposer, setShowComposer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'payment',
      title: 'Payment Reminder',
      message: 'Monthly fee payment due for Advanced Modeling course',
      recipients: 'Batch A-101',
      time: '2 hours ago',
      priority: 'high',
      status: 'sent'
    },
    {
      id: 2,
      type: 'announcement',
      title: 'Special Workshop',
      message: 'Portfolio photography workshop this weekend',
      recipients: 'All Students',
      time: '1 day ago',
      priority: 'medium',
      status: 'sent'
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    recipients: '',
    subject: '',
    message: '',
    sendAsEmail: false,
    highPriority: false
  });

  const getPriorityBadge = (priority) => {
    const styles = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };

    const icons = {
      high: <AlertCircle className="w-4 h-4 mr-1" />,
      medium: <Bell className="w-4 h-4 mr-1" />,
      low: <MessageSquare className="w-4 h-4 mr-1" />
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[priority]}`}>
        {icons[priority]}
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newNotification = {
      id: Date.now(),
      type: newMessage.highPriority ? 'high' : 'medium',
      title: newMessage.subject,
      message: newMessage.message,
      recipients: newMessage.recipients,
      time: 'Just now',
      priority: newMessage.highPriority ? 'high' : 'medium',
      status: 'sent'
    };

    setNotifications([newNotification, ...notifications]);
    setNewMessage({
      recipients: '',
      subject: '',
      message: '',
      sendAsEmail: false,
      highPriority: false
    });
    setShowComposer(false);
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => 
    notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const MessageComposer = () => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-lg bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">New Message</h2>
          <button onClick={() => setShowComposer(false)} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSendMessage} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
            <select 
              value={newMessage.recipients}
              onChange={(e) => setNewMessage({...newMessage, recipients: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Recipients</option>
              <option value="All Students">All Students</option>
              <option value="Batch A-101">Batch A-101</option>
              <option value="Batch A-102">Batch A-102</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input 
              type="text" 
              value={newMessage.subject}
              onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter message subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              value={newMessage.message}
              onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Type your message here..."
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox"
                  checked={newMessage.sendAsEmail}
                  onChange={(e) => setNewMessage({...newMessage, sendAsEmail: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Send as Email</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="checkbox"
                  checked={newMessage.highPriority}
                  onChange={(e) => setNewMessage({...newMessage, highPriority: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">High Priority</span>
              </label>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                onClick={() => setShowComposer(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Communications</h1>
        <button 
          onClick={() => setShowComposer(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          New Message
        </button>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Bell className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Notifications</p>
              <p className="text-2xl font-semibold text-gray-900">{notifications.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Emails Sent</p>
              <p className="text-2xl font-semibold text-gray-900">
                {notifications.filter(n => n.type === 'email').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Recipients</p>
              <p className="text-2xl font-semibold text-gray-900">48</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message History */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {['announcements', 'notifications', 'emails'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>

          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{notification.title}</h3>
                    {getPriorityBadge(notification.priority)}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <span className="mr-2">To: {notification.recipients}</span>
                    <span>{notification.time}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleDeleteNotification(notification.id)}
                  className="p-2 hover:bg-gray-100 rounded-full ml-4 transition-colors"
                  aria-label="Delete notification"
                >
                  <Trash2 className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Composer Modal */}
      {showComposer && <MessageComposer />}
    </div>
  );
};

export default CommunicationSystem;