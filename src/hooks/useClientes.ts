import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

   const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()

  const [cliente,setCLiente] = useState<Cliente>(Cliente.vazio())
  const [clientes,setCLientes] = useState<Cliente[]>([])
  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setCLientes(clientes)
      exibirTabela()
    })
  }
  
  function selecionarCliente(cliente: Cliente){
    setCLiente(cliente)
    exibirFormulario()
  }
  async function excluirCLiente(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCLiente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return{
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCLiente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela
  }

}