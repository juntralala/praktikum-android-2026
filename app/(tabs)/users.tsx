import { Text, View } from "react-native";
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from "@/components/Card";

async function fetchUsers() {
  return await axios.get("https://restaurant-api.dicoding.dev/list", {
    headers: {
      "Accept": "application/json"
    }
  });
}

export default function() {
  const [users, setUsers] = useState([]);

  fetchUsers()
  .then(response => setUsers(response.data?.restaurants))
  .catch(e => console.error(e));
  return (
    <View>
      {users?.map((item: any) => (
        <Card key={item?.id} id={item?.id} sumberGambar={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`} judul={item.name} keterangan={item.description}/>  
      )) 
      || <Text>Tidak ada pengguna yang ditemukan</Text>}
    </View>
  );
}