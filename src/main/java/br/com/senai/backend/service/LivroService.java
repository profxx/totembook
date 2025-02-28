package br.com.senai.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.senai.backend.entity.Livro;
import br.com.senai.backend.repository.LivroRepository;

@Service
public class LivroService {
    
    @Autowired
    private LivroRepository livroRepository;

    //Lista todos os livros
    public List<Livro> findAll(){
        return livroRepository.findAll();
    }

    //Busca livro pelo id
    public Livro findById(Long id){
        return livroRepository.findById(id).orElse(null);
    }

    //Insere novo livro
    public Livro insertNew(Livro livro){
        return livroRepository.save(livro);
    }

    //Deleta livro pelo Id
    public Boolean deleteById(Long id){
        Livro livro = findById(id);
        if(livro == null){
            return false;
        }else{
            livroRepository.deleteById(id);
            return true;
        }
    }

    //Atualiza pelo i
    public Livro update(Long id, Livro livroAtual){
        Livro livro = findById(id);
        livro.setTitulo(livroAtual.getTitulo());
        livro.setAutor(livroAtual.getAutor());
        livro.setData(livroAtual.getData());
        livro.setEditora(livroAtual.getEditora());
        return livroRepository.save(livro);
    }
}
