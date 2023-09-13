package com.bridgetechnology.bridgetechnology.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SimpleEmail {
    public String name;
    public String email;
    public String phoneNumber;
    public String message;
}
