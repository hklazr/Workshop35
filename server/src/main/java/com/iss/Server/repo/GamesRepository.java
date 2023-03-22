package com.iss.Server.repo;

import java.util.List;


import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class GamesRepository {
    
    @Autowired
    MongoTemplate mongoTemplate;

    //db.game.find().skip(0).limit(5);

    public List<String> getGames(Integer limit, Integer offset) {

        Query query = Query.query(new Criteria())
                            .limit(limit)
                            .skip(offset);
        
        List<Document> doc = mongoTemplate.find(query, Document.class, "game"); 
        
        return doc.stream()
                    .map(x -> x.getString("name"))
                    .toList();
    }
}
