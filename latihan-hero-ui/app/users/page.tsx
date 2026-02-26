"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";
import dynamic from "next/dynamic"
import Link from "next/link";
import LinkButtonPrimary from "../components/LinkButtonPrimary";
import LinkButtonSecondary from "../components/LinkButtonSecondary";

const UserMap = dynamic(() => import("../components/UserMapTemp"), {
  ssr: false,
})

const base_url = "https://jsonplaceholder.typicode.com/users";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export default function Users() {
  const [users, setUsers] = useState<Iuser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<Iuser[]>(base_url);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <CardList>
        <h1 className="text-3xl font-bold">Users List</h1>
        <Link href="/users/create">
          <LinkButtonPrimary>Create New User</LinkButtonPrimary>
        </Link>
      </CardList>

      {users.map((user) => (
        <CardList key={user.id}>
          <div className="space-y-2">
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <div>
              <strong>Address:</strong>
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode: {user.address.zipcode}</p>
              <div>
  <strong>Location Map:</strong>
  <UserMap
    lat={parseFloat(user.address.geo.lat)}
    lng={parseFloat(user.address.geo.lng)}
    name={user.name}
  />
</div>
            </div>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>

            <div>
              <strong>Company:</strong>
              <p>Name: {user.company.name}</p>
              <p>CatchPhrase: {user.company.catchPhrase}</p>
              <p>Business: {user.company.bs}</p>
            </div>
            <Link href={`/users/update/${user.id}`}>
              <LinkButtonSecondary>Update User</LinkButtonSecondary>
            </Link>
          </div>
        </CardList>
      ))}
    </div>
  );
}
