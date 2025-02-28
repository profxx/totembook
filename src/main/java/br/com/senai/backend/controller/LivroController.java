package br.com.senai.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.backend.entity.Livro;
import br.com.senai.backend.service.LivroService;

@RestController
@RequestMapping("livros")
public class LivroController {
    
    @Autowired
    private LivroService livroService;

    @GetMapping
    public ResponseEntity<List<Livro>> findAll(){
        List<Livro> livros = livroService.findAll();
        return ResponseEntity.ok().body(livros);
    }

    @GetMapping("{id}")
    public ResponseEntity<Livro> findById(@PathVariable Long id){
        Livro livro = livroService.findById(id);
        return ResponseEntity.ok().body(livro);
    }

    @PostMapping
    public ResponseEntity<Livro> insertNew(@RequestBody Livro livro){
        Livro livroinserido = livroService.insertNew(livro);
        return ResponseEntity.ok().body(livroinserido);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> deleteById(@PathVariable Long id){
        Boolean flag = livroService.deleteById(id);
        return ResponseEntity.ok().body(flag);
    }

    @PutMapping("{id}")
    public ResponseEntity<Livro> update(@PathVariable Long id, @RequestBody Livro livroAtual){
        Livro livro = livroService.update(id, livroAtual);
        return ResponseEntity.ok().body(livro);
    }
}
