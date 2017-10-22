package com.hack.debit.jpa;

import java.io.Serializable;

import javax.persistence.*;

/**
 * Created by arnaldo on 21/10/2017.
 */
@MappedSuperclass
public class JPAEntity implements Serializable {

	private static final long serialVersionUID = -5446172037933111047L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
