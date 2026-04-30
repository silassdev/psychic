# PayPilot

Modern payroll and attendance management system built with **Next.js**, **Tailwind CSS**, and **MongoDB**.

## Overview

PayPilot is a web-based HR operations platform for managing employees, attendance, leave requests, and payroll processing in one place. It is designed to run as an MVP on **Vercel Free** with **MongoDB Atlas**.

## Features

* Authentication with role-based access control
* Admin, HR, manager, and employee roles
* Employee management
* Attendance check-in / check-out
* Late arrival and overtime tracking
* Leave request workflow
* Payroll period management
* Payroll calculation and payslip generation
* Responsive dashboard UI
* MongoDB-powered data storage
* Vercel-ready deployment structure

## Tech Stack

* **Frontend:** Next.js, Tailwind CSS
* **Backend:** Next.js Route Handlers / Server Actions
* **Database:** MongoDB
* **Auth:** NextAuth or Credentials-based auth
* **Validation:** Zod
* **UI Icons:** lucide-react

## Project Goals

This project is built to:

* keep payroll and attendance simple for small teams
* provide a clean modern interface
* remain easy to deploy for free
* scale later into a full HR system

## Folder Structure

```bash
src/
  app/
    (auth)/
    (dashboard)/
    api/
  components/
  lib/
  models/
  types/
  utils/
scripts/
public/
```


## Database Models

### User

Stores login and access control data.

Fields:

* `name`
* `email`
* `password`
* `role`
* `employeeId`
* `status`

### Employee

Stores staff profile and salary details.

Fields:

* `userId`
* `staffId`
* `departmentId`
* `jobTitle`
* `baseSalary`
* `joinDate`
* `status`

### Attendance

Stores daily time records.

Fields:

* `employeeId`
* `date`
* `clockIn`
* `clockOut`
* `lateMinutes`
* `overtimeMinutes`
* `status`

### Payroll

Stores payroll calculations and final payment records.

Fields:

* `employeeId`
* `periodStart`
* `periodEnd`
* `grossPay`
* `deductions`
* `netPay`
* `status`

## Authentication

PayPilot uses a credentials-based login flow with MongoDB-backed users.

### Roles

* `admin` — full system access
* `hr` — manage employees, attendance, payroll
* `manager` — view and approve team records
* `employee` — view personal data and attendance


## Core Modules

### Dashboard

A central overview showing:

* total employees
* today’s attendance
* pending leave requests
* payroll status
* quick actions

### Employees

* create employee
* edit employee
* archive/inactivate employee
* assign department and role

### Attendance

* clock in
* clock out
* manual correction request
* late and overtime tracking

### Leave

* request leave
* approve/reject leave
* view leave history

### Payroll

* create payroll period
* calculate salary
* preview before approval
* generate payslips

## API Structure

Typical endpoints:

```bash
/api/auth/[...nextauth]
/api/employees
/api/attendance
/api/leave
/api/payroll
```


## Free Tier Notes

This app is designed to fit free-tier hosting limits, but some trade-offs apply:

* avoid heavy background jobs
* keep payroll calculations lightweight
* generate PDFs only when needed
* avoid long-running server processes
* use pagination for large datasets

## Security Notes

* never store plain-text passwords
* restrict sensitive actions by role
* validate all form input
* sanitize payroll values
* protect admin routes with middleware
* log critical actions in an audit trail later

## Roadmap

### MVP

* login system
* employee CRUD
* attendance tracking
* leave requests
* payroll preview
* payslip generation

### Next Phase

* email notifications
* export to PDF and CSV
* audit logs
* multi-branch support
* advanced reports
* mobile-first employee portal

### Later Phase

* biometric integration
* automated payroll scheduling
* tax and compliance rules
* multi-company support
* analytics and forecasting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request



* MIT

## Author

Built by **Silas**.

