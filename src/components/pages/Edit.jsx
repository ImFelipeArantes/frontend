/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

import "./Edit.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetchUser();
  }, [id]);
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://backend-api-lry9.onrender.com/user-details/${id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNavigate = () => {
    navigate("/users");
  };
  const onSubmit = async (data) => {
    let dados;
    await axios
      .put(`https://backend-api-lry9.onrender.com/update-user/${id}`, data)
      .then((res) => {
        console.log(res.data);
        dados = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    if (dados.type === "success") {
      navigate(`/view/${id}`);
      alert(dados.message);
    } else {
      alert(dados.message);
    }
  };
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formulario">
      <div className="app-container">
        <div className="form-group">
          <label>Nome Completo</label>
          <input
            className={errors?.name && "input-error"}
            type="text"
            placeholder="Seu nome."
            {...register("name", { required: true })}
            value={user.name}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.name?.type === "required" && (
            <p className="error-message">Name é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            className={errors?.email && "input-error"}
            type="email"
            placeholder="Seu e-mail."
            {...register("email", {
              required: true,
              validate: (value) => isEmail(value),
            })}
            value={user.email}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.email?.type === "required" && (
            <p className="error-message">Email é obrigatório.</p>
          )}

          {errors?.email?.type === "validate" && (
            <p className="error-message">O E-mail está invalido.</p>
          )}
        </div>

        <div className="form-group">
          <label>Telefone</label>
          <input
            className={errors?.cellphone && "input-error"}
            type="text"
            placeholder="ex: (01)23456-7890."
            {...register("cellphone", {
              required: true,
              maxLength: 14,
              minLength: 14,
            })}
            value={user.cellphone}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.cellphone?.type === "required" && (
            <p className="error-message">Telefone é obrigatório.</p>
          )}
          {errors?.cellphone?.type === "maxLength" && (
            <p className="error-message">
              Número muito grande, ex:(01)23456-7890.
            </p>
          )}
          {errors?.cellphone?.type === "minLength" && (
            <p className="error-message">
              Número muito curto, ex:(01)23456-7890.
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Número do calçado</label>
          <input
            className={errors?.feet && "input-error"}
            type="text"
            placeholder="Digite o número do seu calçado."
            {...register("feet", { required: true })}
            value={user.feet}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.feet?.type === "required" && (
            <p className="error-message">Número do calçado é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <label>Cor favorita</label>
          <input
            className={errors?.color && "input-error"}
            type="text"
            placeholder="Digite sua cor favorita."
            {...register("color", { required: true })}
            value={user.color}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.color?.type === "required" && (
            <p className="error-message">Cor favorita é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <label>País</label>
          <input
            className={errors?.country && "input-error"}
            type="text"
            placeholder="Digite o País onde você mora."
            {...register("country", { required: true })}
            value={user.country}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.country?.type === "required" && (
            <p className="error-message">País é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <label>Cidade</label>
          <input
            className={errors?.city && "input-error"}
            type="text"
            placeholder="Digite a cidade onde você mora."
            {...register("city", { required: true })}
            value={user.city}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.city?.type === "required" && (
            <p className="error-message">Cidade é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <label>Gênero</label>
          <select
            className={errors?.gender && "input-error"}
            defaultValue="0"
            {...register("gender", { validate: (value) => value !== "0" })}
            value={user.gender}
            onChange={(e) => handleOnChange(e)}
          >
            <option value="0">Selecione uma opção</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outros">Outro</option>
          </select>

          {errors?.gender?.type === "validate" && (
            <p className="error-message">Gênero é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <label>Marca</label>
          <input
            className={errors?.brand && "input-error"}
            type="text"
            placeholder="Digite sua marca favorita."
            {...register("brand", { required: true })}
            value={user.brand}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.brand?.type === "required" && (
            <p className="error-message">Marca é obrigatório.</p>
          )}
        </div>

        <div className="form-group">
          <button onClick={() => handleSubmit(onSubmit)()}>Salvar</button>
        </div>
        <div className="d-flex justify-content-center mt-2 mb-2">
          <button className="btn btn-primary" onClick={handleNavigate}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};
