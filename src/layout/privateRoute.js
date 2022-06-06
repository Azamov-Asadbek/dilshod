import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'components/sidebar';
export default function PrivateRoute() {
  return <Sidebar>{<Outlet />}</Sidebar>;
}
