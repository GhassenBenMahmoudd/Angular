package com.apprh.service;

import com.apprh.dao.UserDao;
import com.apprh.dto.JwtRequest;
import com.apprh.dto.JwtResponse;
import com.apprh.entity.User;
import com.apprh.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class JwtService implements UserDetailsService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDao userDao;

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
        String emailCapgemini = jwtRequest.getEmailCapgemini();
        String userPassword = jwtRequest.getUserPassword();
        authenticate(emailCapgemini, userPassword);

        UserDetails userDetails = loadUserByUsername(emailCapgemini);
        String newGeneratedToken = jwtUtil.generateToken(userDetails);

        User user = userDao.findByEmailCapgemini(emailCapgemini).get();
        return new JwtResponse(user, newGeneratedToken);
    }

    @Override
    public UserDetails loadUserByUsername(String emailCapgemini) throws UsernameNotFoundException {
        User user = userDao.findByEmailCapgemini(emailCapgemini).get();

        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getEmailCapgemini(),
                    user.getUserPassword(),
                    getAuthority(user)
            );
        } else {
            throw new UsernameNotFoundException("User not found with username: " + emailCapgemini);
        }
    }

    private Set getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        user.getRole().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
        });
        return authorities;
    }

    private void authenticate(String emailCapgemini, String userPassword) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(emailCapgemini, userPassword));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
