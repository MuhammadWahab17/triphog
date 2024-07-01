import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Super Admin
import SuperAdminTemplate from "./Pages/SuperAdminTemplate";
import HomeIndex from "./components/SuperAdmin/Home/Home";
import SubscribersIndex from "./components/SuperAdmin/Subscribers/Index";
import AddNewAdmin from "./components/SuperAdmin/Subscribers/AddNewAdmin/Index";
import SingleAdmin from "./components/SuperAdmin/Subscribers/SingleAdmin/SingleAdmin";
import ManageStatus from "./components/SuperAdmin/Subscribers/SingleAdmin/ManageStatus";
import Payment from "./components/SuperAdmin/Subscribers/SingleAdmin/Payment";
import AddNewAdminProvider from "./Providers/SuperAdmin/AddNewAdminProvider";
import UpdateAdminProvider from "./Providers/SuperAdmin/UpdateAdminProvider";
import AllPaymentProvider from "./Providers/SuperAdmin/AllPaymentProvider";
import AllAdminsProvider from "./Providers/SuperAdmin/AllAdminsProvider";
import GetSingleAdminProvider from "./Providers/SuperAdmin/GetSingleAdminProvider";
import SuperAdminLogin from "./components/SuperAdmin/Login/SuperAdminLogin";
import ChangePassword from "./components/SuperAdmin/Setting/ChangePassword";
import Chat from "./components/SuperAdmin/Chat/Chat";
import ChatTemplate from "./components/SuperAdmin/Chat/ChatTemplate";
// Admin
import AdminLogin from "./components/Admin/Login/AdminLogin";
import AdminTemplate from "./Pages/AdminTemplate";
import Home from "./components/Admin/Home/Home";
import Driver from "./components/Admin/Drivers/DriverPage/Driver";
import AddNewDriver from "./components/Admin/Drivers/Add New Driver/AddNewDriver";
import SingleDriver from "./components/Admin/Drivers/SingleDriver/SingleDriver";
import Ride from "./components/Admin/Rides/RidePage/Ride";
import AddNewRide from "./components/Admin/Rides/AddNewRide/AddNewRide";
import SingleRide from "./components/Admin/Rides/SingleRide/SingleRide";
import Patient from "./components/Admin/Patients/PatientPage/Patient";
import SinglePatient from "./components/Admin/Patients/SinglePatient/SinglePatient";
import Plan from "./components/Admin/Payment/Plan/Plan";
import Packages from "./components/Admin/Payment/Packages/Packages";
import PackagesTemplate from "./components/Admin/Payment/Packages/PackagesTemplate";
import HomeTemplate from "./components/Admin/Home/HomeTemplate";
import AdminChatTemplate from "./components/Admin/Chat/AdminChatTemplate";
import AdminChat from "./components/Admin/Chat/AdminChat";
import PayrolTemplate from "./components/Admin/Payrol/PayrolTemplate";
import Payrol from "./components/Admin/Payrol/Payrol";
import MeetingTemplate from "./components/Admin/Meeting/MeetingTemplate";
import Meeting from "./components/Admin/Meeting/Meeting";
import Analytics from "./components/Admin/Analytics/Analytics";
import ChangePasswordAdmin from "./components/Admin/Setting/ChangePassword/ChangePasswordAdmin";
import EditProfile from "./components/Admin/Setting/EditProfile/EditProfile";
import SettingTemplate from "./components/Admin/Setting/SettingTemplate";
import FrequentVisitPages from "./components/Admin/Setting/FrequentVisitPages/FrequentVisitPages";
import FeedBack from "./components/Admin/FeedBack/FeedBack";
import AddNewUser from "./components/Admin/User/AddNewUser/AddNewUser";
import Users from "./components/Admin/User/UsersPage/Users";
import NotificationTemplate from "./components/Notification/NotificationTemplate";
import Notification from "./components/Notification/Notification";
import CreatePassword from "./components/Admin/CreatePassword/CreatePassword";
import CreatePasswordProvider from "./Providers/SuperAdmin/CreatePasswordProvider";
import { AdminLoginProvider } from "./Providers/Admin/AdminLoginProvider";
import DeleteAdminProvider from "./Providers/SuperAdmin/DeleteAdminProvider";
// import Calendar from "./components/Admin/Meeting/Calendar";
// import { CalendarProvider } from "./Providers/Admin/CalendarProvider";
import GoogleAuthCallback from "./components/Admin/Meeting/GoogleAuth";
import CalendarDashboard from "./components/Admin/Meeting/CalendarDashboard";
import { AuthProvider } from "./Providers/Admin/AuthContext";
import { CalendarProvider } from "./Providers/Admin/CalendarContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Password Creation */}
        <Route
          path="/admin/create-password/:token"
          element={
            <CreatePasswordProvider>
              <CreatePassword />
            </CreatePasswordProvider>
          }
        />
        {/* <Route
          path="/admin/auth/google/callback"
          element={
            <CalendarProvider>
              <GoogleAuthCallback />
            </CalendarProvider>
          }
        /> */}
        <Route path="/:role/notifications" element={<NotificationTemplate />}>
          <Route index element={<Notification />} />
        </Route>
        {/* Login */}
        <Route path="/admin/settings" element={<SettingTemplate />}>
          <Route path="changepassword" element={<ChangePasswordAdmin />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="frequentvisitpages" element={<FrequentVisitPages />} />
        </Route>
        <Route path="/superadmin/login" element={<SuperAdminLogin />} />
        <Route
          path="/admin/login"
          element={
            <AdminLoginProvider>
              <AdminLogin />
            </AdminLoginProvider>
          }
        />
        <Route path="/superadmin/chat" element={<ChatTemplate />}>
          <Route index element={<Chat />} />
        </Route>
        {/* Admin */}
        <Route path="/admin/payrol" element={<PayrolTemplate />}>
          <Route index element={<Payrol />} />
        </Route>
        <Route path="/admin/chat" element={<AdminChatTemplate />}>
          <Route index element={<AdminChat />} />
        </Route>
        <Route path="/admin/meeting" element={<MeetingTemplate />}>
          <Route
            index
            element={
              <AuthProvider>
                <CalendarProvider>
                  {/* <CalendarDashboard /> */}
                  <Meeting />
                </CalendarProvider>
              </AuthProvider>
            }
          />
        </Route>
        <Route path="/admin/packages" element={<PackagesTemplate />}>
          <Route index element={<Packages />} />
        </Route>
        <Route path="/admin" element={<HomeTemplate />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="drivers" element={<Driver />} />
          <Route path="users" element={<Users />} />

          <Route path="addnewuser" element={<AddNewUser />} />
          {/* <Route path="users" element={<AddNewUser />} /> */}
          <Route path="feedbacks" element={<FeedBack />} />
          <Route path="analytics" element={<Analytics />} />
          {/* Trips */}
          <Route path="trips" element={<Ride />} />
          <Route path="addnewtrip" element={<AddNewRide />} />
          <Route path="trip/:id" element={<SingleRide />} />
          <Route path="addnewdriver" element={<AddNewDriver />} />
          <Route path="driver/:id" element={<SingleDriver />} />
          <Route path="plan" element={<Plan />} />

          {/* Patients */}

          <Route path="patient" element={<Patient />} />
          <Route path="patient/:id" element={<SinglePatient />} />
        </Route>

        {/* Super Admin */}
        <Route path="/superadmin" element={<SuperAdminTemplate />}>
          <Route path="settings">
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>

          <Route index element={<HomeIndex />} />

          <Route path="subscribers">
            <Route index element={<SubscribersIndex />} />

            <Route
              path="addnewadmin"
              element={
                <AddNewAdminProvider>
                  <AddNewAdmin />
                </AddNewAdminProvider>
              }
            />

            <Route
              path="admin/:id"
              element={
                <GetSingleAdminProvider>
                  <UpdateAdminProvider>
                    <SingleAdmin />
                  </UpdateAdminProvider>
                </GetSingleAdminProvider>
              }
            />
            <Route
              path="managestatus/:id"
              element={
                <GetSingleAdminProvider>
                  <ManageStatus />
                </GetSingleAdminProvider>
              }
            />
            <Route
              path="payment/:id"
              element={
                <AllPaymentProvider>
                  <GetSingleAdminProvider>
                    <Payment />
                  </GetSingleAdminProvider>
                </AllPaymentProvider>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
