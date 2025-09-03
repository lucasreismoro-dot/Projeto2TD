// script.js - Biblioteca Escolar Online

// --- Variáveis de dados simuladas ---
let livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true },
    { id: 2, titulo: "O Pequeno Príncipe", autor: "Saint-Exupéry", disponivel: true }
  ];
  
  let alunos = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
  ];
  
  let emprestimos = [];
  
  
  // --- Função para navegação entre páginas ---
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
  }
  
  
  // --- Livros ---
  
  // Listar todos os livros na tela
  function listarLivros() {
    const livrosSection = document.getElementById('livros');
    livrosSection.innerHTML = `<h2>Livros</h2>`;
    livros.forEach(livro => {
      livrosSection.innerHTML += `<p>${livro.id} - ${livro.titulo} (${livro.autor}) - ${livro.disponivel ? 'Disponível' : 'Emprestado'}</p>`;
    });
    // Dica: aqui você pode adicionar botões de editar e remover livros
  }
  
  // Adicionar novo livro
  function adicionarLivro(titulo, autor) {
    const novoLivro = { id: livros.length + 1, titulo, autor, disponivel: true };
    livros.push(novoLivro);
    listarLivros();
    // Dica: limpar formulário após adicionar
  }
  
  // Remover livro
  function removerLivro(id) {
    // Implementar função para remover livro pelo id
    // Atualizar lista de livros após remoção
  }
  
  // Editar livro
  function editarLivro(id, novoTitulo, novoAutor) {
    // Implementar função para editar livro existente
    // Atualizar lista após edição
  }
  
  
  // --- Alunos ---
  
  // Listar alunos
  function listarAlunos() {
    const alunosSection = document.getElementById('alunos');
    alunosSection.innerHTML = `<h2>Alunos</h2>`;
    alunos.forEach(aluno => {
      alunosSection.innerHTML += `<p>${aluno.id} - ${aluno.nome}</p>`;
    });
    // Dica: adicionar botões de editar e remover alunos
  }
  
  // Adicionar aluno
  function adicionarAluno(nome) {
    const novoAluno = { id: alunos.length + 1, nome };
    alunos.push(novoAluno);
    listarAlunos();
    // Dica: limpar formulário após adicionar
  }
  
  // Remover aluno
  function removerAluno(id) {
    // Implementar função para remover aluno pelo id
    // Atualizar lista de alunos após remoção
  }
  
  // Editar aluno
  function editarAluno(id, novoNome) {
    // Implementar função para editar aluno existente
    // Atualizar lista após edição
  }
  
  
  // --- Empréstimos ---
  
  // Registrar empréstimo
  function registrarEmprestimo(livroId, alunoId) {
    const livro = livros.find(l => l.id == livroId);
    const aluno = alunos.find(a => a.id == alunoId);
    if (!livro || !aluno) {
      alert('Livro ou aluno não encontrado');
      return;
    }
    if (!livro.disponivel) {
      alert('Livro indisponível');
      return;
    }
  
    livro.disponivel = false;
    emprestimos.push({ livroId, alunoId, data: new Date().toLocaleDateString() });
    listarLivros();
    listarEmprestimos();
  }
  
  // Listar empréstimos
  function listarEmprestimos() {
    const emprestimosSection = document.getElementById('emprestimos');
    emprestimosSection.innerHTML = `<h2>Empréstimos</h2>`;
    emprestimos.forEach(e => {
      const livro = livros.find(l => l.id == e.livroId);
      const aluno = alunos.find(a => a.id == e.alunoId);
      emprestimosSection.innerHTML += `<p>${aluno.nome} pegou '${livro.titulo}' em ${e.data}</p>`;
    });
    // Dica: adicionar botão para devolver livro e atualizar disponibilidade
  }
  
  // Devolver livro
  function devolverLivro(livroId) {
    // Implementar função para devolver livro
    // Atualizar lista de empréstimos e disponibilidade do livro
  }
  
  
  // --- Inicialização ---
  window.onload = function() {
    listarLivros();
    listarAlunos();
    listarEmprestimos();
  }
  