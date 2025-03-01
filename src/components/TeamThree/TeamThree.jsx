'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import teamThreeData from '@/data/TeamThreeData';

const { title, tagLine, teamData } = teamThreeData;

const TeamThree = () => {
    return (
        <section
            id="team"
            style={{
                padding: '60px 0',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
            }}
        >
            <Container>
                <div>
                    <h6
                        style={{
                            fontSize: '18px',
                            color: '#004aad',
                            textTransform: 'uppercase',
                            marginBottom: '15px',
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        {tagLine}
                    </h6>
                    <h3
                        style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#222',
                            marginBottom: '40px',
                        }}
                    >
                        Our Team Members
                    </h3>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        justifyContent: 'center',
                    }}
                >
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '10px',
                                padding: '20px',
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '50%',
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    style={{ objectFit: 'cover' }}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div style={{ marginTop: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '22px',
                                        fontWeight: '600',
                                        color: '#222',
                                    }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '16px',
                                        color: '#777',
                                    }}
                                >
                                    {member.designation}
                                </p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginTop: '10px',
                                }}
                            >
                                {/* {member.socialLinks.map(({ name, href, icon }, idx) => (
                                    <Link href={href} key={idx}>
                                        <i
                                            className={icon}
                                            style={{
                                                fontSize: '18px',
                                                color: '#004aad',
                                                transition: 'color 0.3s ease, transform 0.3s ease',
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.color = '#222';
                                                e.target.style.transform = 'scale(1.2)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.color = '#004aad';
                                                e.target.style.transform = 'scale(1)';
                                            }}
                                        ></i>
                                        <span className="sr-only">{name}</span>
                                    </Link>
                                ))} */}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TeamThree;