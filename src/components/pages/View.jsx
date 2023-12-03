/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./View.css";

export const View = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://backend-api-lry9.onrender.com/user-details/${id}`
      );
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNavigate = () => {
    navigate("/users");
  };
  const handleNavigateUpdate = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <div className="container">
        <div className="titulo">
          <h1>Detalhes do Usuário</h1>
        </div>
        <div className="valores" key={user.id}>
          <div className="individual">
            <h3>Nome</h3>
            <p>{user.name}</p>
          </div>
          <div className="individual">
            <h3>E-mail</h3>
            <p>{user.email}</p>
          </div>
          <div className="individual">
            <h3>Telefone</h3>
            <p>{user.cellphone}</p>
          </div>
          <div className="individual">
            <h3>Número de calçado</h3>
            <p>{user.feet}</p>
          </div>
          <div className="individual">
            <h3>Cor favorita</h3>
            <p>{user.color}</p>
          </div>
          <div className="individual">
            <h3>País</h3>
            <p>{user.country}</p>
          </div>
          <div className="individual">
            <h3>Cidade</h3>
            <p>{user.city}</p>
          </div>
          <div className="individual">
            <h3>Gênero</h3>
            <p>{user.gender}</p>
          </div>
          <div className="individual">
            <h3>Marca favorita</h3>
            <p>{user.brand}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2 mb-2">
        <button className="btn btn-primary" onClick={handleNavigate}>
          Voltar
        </button>
        <button
          className="btn btn-secondary mx-2"
          onClick={handleNavigateUpdate}
        >
          Editar
        </button>
      </div>
    </div>
  );
};
