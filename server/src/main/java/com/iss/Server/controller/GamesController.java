package com.iss.Server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.MediaType;

import com.iss.Server.service.GamesService;

@Controller
@RequestMapping(path="/api", produces=MediaType.APPLICATION_JSON_VALUE)
@ResponseBody
@CrossOrigin(origins="*")
public class GamesController {

    @Autowired
    GamesService gamesSvc;

    @GetMapping("/games")
    @CrossOrigin(origins="*")
    public ResponseEntity<List<String>> getGames(
            @RequestParam(value = "limit", required = false, defaultValue = "10") Integer limit, 
            @RequestParam(value = "offset", required = false, defaultValue = "0") Integer offset) {

        List<String> names = gamesSvc.getGames( limit, offset );

        return ResponseEntity.ok().body(names);
    }
    
}
