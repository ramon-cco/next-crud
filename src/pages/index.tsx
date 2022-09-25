import Layout from '../components/Layout'
import Table from '../components/Table'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const { 
    cliente, 
    clientes,
    selecionarCliente,
    salvarCliente,
    excluirCLiente,
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `
    }>
        <Layout title='Cadastro simples'>
          {tabelaVisivel?(
            <>
            <div className='flex justify-end'>
              <Botao cor="blue" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
              <Table clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCLiente} />
              </>
          ) : (
            <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
            />
          )}
        </Layout> 
    </div>
  )
}
