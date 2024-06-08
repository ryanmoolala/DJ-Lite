package com.example.spotifytool.AuthorizationFlowPKCE;

import java.security.SecureRandom;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;  //Java's way of implementing a SHA256 hashing algorithm  <----> Javascript's window.crypto.subtle.digest
import java.security.NoSuchAlgorithmException;  //Checked exception if the provided hashing algorithm is non-existent
import org.apache.commons.codec.binary.Base64;

import java.util.logging.Logger;

public class CodeChallenge {
    
    //CODE VERIFIER
    // Generates a random string of characters up to a specified length (Recommended to be from 43 to 128)
    public static String generateCodeVerifier() {
        SecureRandom random = new SecureRandom();
        byte[] codeVerifier = new byte[32];
        random.nextBytes(codeVerifier);
        return Base64.encodeBase64URLSafeString(codeVerifier);
    }
    //CODE CHALLENGE:
    //Generates a hash code of code verifier using SHA-256 hashing algorithm
    private static byte[] generateCodeChallenge(String str) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        byte[] bytes = str.getBytes("US-ASCII");
        MessageDigest digestedMessage = MessageDigest.getInstance("SHA-256");
        digestedMessage.update(bytes, 0, bytes.length);
        return digestedMessage.digest();
    }
    //Generates a base64 represenation of a byte[] array
    private static String generateBase64URLCode(byte[] input) {
        return Base64.encodeBase64URLSafeString(input);
    }
    
    public static String getCodeChallenge(String input) {
        String s = "";
        try {
            s = generateBase64URLCode(generateCodeChallenge(input));
        } catch (UnsupportedEncodingException | NoSuchAlgorithmException e) {
            Logger.getLogger("Error: " + e.getMessage());
        }
        return s;
    }
    
}