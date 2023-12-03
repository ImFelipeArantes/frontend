import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";

export const Users = () => {
  const deleteUser = async (id) => {
    let resultado;
    await axios
      .delete("https://backend-api-lry9.onrender.com/delete-user/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        resultado = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    if (resultado.type === "success") {
      alert(resultado.message);
    } else {
      alert(resultado.message);
    }
    const newUsersData = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(newUsersData);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    await axios
      .get("https://backend-api-lry9.onrender.com/get-users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1>Usuários</h1>
      <table className="table table-bordered table-dark tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <NavLink
                  to={`/view/${user.id}`}
                  className="btn btn-success btn-sm m-1"
                >
                  View
                </NavLink>
                <NavLink
                  to={`/edit/${user.id}`}
                  className="btn btn-primary btn-sm m-1"
                >
                  Editar
                </NavLink>
                <button
                  className="btn btn-danger btn-sm m-1"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
