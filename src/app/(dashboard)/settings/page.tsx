"use client";

import { useState } from "react";
import { User, Shield, Bell, Building, CreditCard, Plus, MoreHorizontal } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General Profile", icon: User },
    { id: "team", label: "Team & Security", icon: Shield },
    { id: "company", label: "Company Details", icon: Building },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Billing & Plan", icon: CreditCard },
  ];

  return (
    <div className="max-w-6xl space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your account, team members, and preferences.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-3 py-2.5 font-medium rounded-lg transition-colors whitespace-nowrap text-left ${
                  activeTab === tab.id
                    ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <tab.icon className="h-4 w-4" /> {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Settings Content Area */}
        <div className="flex-1 space-y-6">
          
          {/* GENERAL PROFILE TAB */}
          {activeTab === "general" && (
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-4">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Personal Information</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Update your photo and personal details here.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-400">
                    AD
                  </div>
                  <div>
                    <button className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                      Change Avatar
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                    <input type="text" defaultValue="Admin User" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                    <input type="email" defaultValue="admin@company.com" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950/50 px-6 py-4 flex justify-end border-t border-slate-200 dark:border-slate-800">
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </section>
          )}

          {/* TEAM & SECURITY TAB */}
          {activeTab === "team" && (
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-900">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Team Members</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Manage who has access to this workspace.</p>
                </div>
                <button className="flex items-center gap-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm">
                  <Plus className="h-4 w-4" /> Invite
                </button>
              </div>
              
              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">AD</div>
                    <div>
                      <p className="font-medium text-sm text-slate-900 dark:text-slate-100">Admin User <span className="ml-2 text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">You</span></p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">admin@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:inline-block">Owner</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><MoreHorizontal className="h-5 w-5" /></button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* COMPANY DETAILS TAB */}
          {activeTab === "company" && (
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors animate-in fade-in slide-in-from-right-4 duration-300 p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <Building className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Company Configuration</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Setup your organization's legal details and facilities.</p>
                </div>
            </section>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === "notifications" && (
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors animate-in fade-in slide-in-from-right-4 duration-300 p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <Bell className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Notification Preferences</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage email alerts and weekly summary reports.</p>
                </div>
            </section>
          )}

          {/* BILLING TAB */}
          {activeTab === "billing" && (
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors animate-in fade-in slide-in-from-right-4 duration-300 p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <CreditCard className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Billing & Subscription</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">You are currently on the Enterprise Plan.</p>
                </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
