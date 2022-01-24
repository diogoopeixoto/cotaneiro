import React from 'react';
import Button from '@mui/material/Button';
import BasePage from '../BasePage';
import './styles.css'; 
function Customer() {
  return (
    <BasePage>

      <div>

        <div className="container">
          <div className="title">Cadastro de Usuário</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Nome completo</span>
                  <input type="text" placeholder="Digite seu nome" required />
                </div>
                <div className="input-box">
                  <span className="details">Nome de Usuário</span>
                  <input type="text" placeholder="Nome de Usuário" required />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" placeholder="Digite o Email" required />
                </div>
                <div className="input-box">
                  <span classNameName="details">Telefone Celular</span>
                  <input type="text" placeholder="(99)9999-9999" required />
                </div>
                <div className="input-box">
                  <span className="details">Senha</span>
                  <input type="text" placeholder="Defina uma senha" required />
                </div>
                <div className="input-box">
                  <span className="details">Confirmar Senha</span>
                  <input type="text" placeholder="Confirme sua senha" required />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" />
                <span className="gender-title">Categoria</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Administrador</span>
                  </label>
                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Usuário</span>
                  </label>
                  <label for="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Fornecedor</span>
                  </label>
                </div>

                <div className="button">
                  <input type="submit" value="Cadastrar" />

                </div>

              </div>
            </form>



          </div>

        </div>
      </div>


      <Button variant="contained"> Olá Mundo</Button>
    </BasePage>
  );
}

export default Customer;