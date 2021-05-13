package com.caterpie.timeletter.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Value;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

public class SftpUtil {

	private static final String SESSION_CONFIG_STRICT_HOST_KEY_CHECKING = "StrictHostKeyChecking";
	
	static String host="k4d105.p.ssafy.io";
	static String username = "root";
	static String password = "caterpie";
	static String root = "/home/ubuntu/files";
	static String privateKey = "C:\\Users\\multicampus\\.ssh\\K4D105T.pem";
	
	int port = 22;
	int timeout = 30000;
	
	public SftpUtil() {}
	
	private ChannelSftp createSftp() throws Exception {
		JSch jsch = new JSch();
		
		jsch.addIdentity(privateKey);
		Session session = createSession(jsch, host, username, port);
		session.setPassword(password);
		session.connect(timeout);
		
		Channel channel = session.openChannel("sftp");
		channel.connect(timeout);
		
		return (ChannelSftp) channel;
	}
	
	private Session createSession(JSch jsch, String host, String username, Integer port) throws Exception {
		Session session = null;
		
		if (port<=0) {
			session = jsch.getSession(username,host);
		} else session = jsch.getSession(username, host, port);
		
		if (session == null) throw new Exception(host+" session is null");
		
		session.setConfig(SESSION_CONFIG_STRICT_HOST_KEY_CHECKING, "no");
		return session;
	}
	
	private void disconnect(ChannelSftp sftp) {
		try {
			if (sftp != null) {
                if (sftp.isConnected()) sftp.disconnect();
                if (sftp.getSession() != null) sftp.getSession().disconnect();
            }
		} catch(JSchException e) {
			e.printStackTrace();
		}
	}
	
	public boolean uploadFile(String targetPath, File file) throws Exception {
        return this.uploadFile(targetPath, new FileInputStream(file));
    }
	
	private boolean uploadFile(String targetPath, InputStream inputStream) throws Exception {
		ChannelSftp sftp = this.createSftp();
		
		try {
			sftp.cd(root);
			
			int index = targetPath.lastIndexOf("/");
			String fileName = targetPath.substring(index+1);
			sftp.put(inputStream, fileName);
			
			return true;
		} catch(Exception e) {
			throw new Exception("Upload File Failure");
		} finally {
			this.disconnect(sftp);
		}
	}
	
	public static void main(String[] args) {
		
		System.out.println(host);
		SftpUtil ftp = new SftpUtil();
		
		String fileName = "example.mp4";
		File file = new File("C:\\Users\\multicampus\\Desktop\\"+fileName);

		String targetPath = root + "/"+ fileName;
		try {
			ftp.uploadFile(targetPath, file);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
