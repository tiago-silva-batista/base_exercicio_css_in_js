import styled from 'styled-components'

const StyledComponents = {
  Vaga: styled.li`
    border: 1px solid var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
    padding: 16px;
    transition: all ease 0.3s;
    border-radius: 8px;

    &:hover {
      background-color: var(--cor-principal);
      color: var(--cor-secundaria);

      a {
        border-color: var(--cor-principal);
        background-color: var(--cor-secundaria);
        color: var(--cor-principal);
      }
    }
  `,
  VagaTitulo: styled.h3`
    font-weight: bold;
    margin-bottom: 16px;
  `,
  VagaLink: styled.a`
    border-color: var(--cor-secundaria);
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  `
}

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <StyledComponents.Vaga>
    <StyledComponents.VagaTitulo>{props.titulo}</StyledComponents.VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <StyledComponents.VagaLink href="#">
      Ver detalhes e candidatar-se
    </StyledComponents.VagaLink>
  </StyledComponents.Vaga>
)

export default Vaga
