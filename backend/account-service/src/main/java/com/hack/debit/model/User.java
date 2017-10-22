package com.hack.debit.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.hack.debit.jpa.JPAEntity;

/**
 * Created by arnaldo on 21/10/2017.
 */
@Entity
@Table(name = "account_user")
public class User extends JPAEntity {

	private static final long serialVersionUID = -5992095789117531096L;

	@Column(nullable = false)
	private String name;

	@Column(unique = true, nullable = false)
	private String email;

	@Column(unique = true, nullable = false)
	private String nationalId;

	@Column(unique = true)
	private String externalId;

	@Column
	private String password;

	@Enumerated(EnumType.STRING)
	@Column
	private AuthenticationTypeEnum authenticationType;


	public AuthenticationTypeEnum getAuthenticationType() {
		return authenticationType;
	}

	public void setAuthenticationType(AuthenticationTypeEnum authenticationType) {
		this.authenticationType = authenticationType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getExternalId() {
		return externalId;
	}

	public void setExternalId(String externalId) {
		this.externalId = externalId;
	}

	public String getNationalId() {
		return nationalId;
	}

	public void setNationalId(String nationalId) {
		this.nationalId = nationalId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
