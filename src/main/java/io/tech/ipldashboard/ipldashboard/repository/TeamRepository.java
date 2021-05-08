package io.tech.ipldashboard.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.tech.ipldashboard.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);
    
}
