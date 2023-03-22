package com.iss.Server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iss.Server.repo.GamesRepository;

@Service
public class GamesService {
    
    @Autowired
    GamesRepository gameRepo;

    public List<String> getGames(Integer limit, Integer offset) {
        return gameRepo.getGames(limit, offset);
    }
}
