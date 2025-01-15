'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import teamThreeData from '@/data/TeamThreeData';

const { title, tagLine, teamData } = teamThreeData;

const TeamThree = () => {
    // Assuming the first item in the teamData is the president
    const president = teamData[0];

    return (
        <section
            id="president"
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
                        <span
                            style={{
                                content: '',
                                height: '2px',
                                width: '40px',
                                backgroundColor: '#004aad',
                                position: 'absolute',
                                top: '50%',
                                left: '-50px',
                                marginTop: '-1px',
                                display: 'inline-block',
                            }}
                        ></span>
                        {tagLine}
                        <span
                            style={{
                                content: '',
                                height: '2px',
                                width: '40px',
                                backgroundColor: '#004aad',
                                position: 'absolute',
                                top: '50%',
                                right: '-50px',
                                marginTop: '-1px',
                                display: 'inline-block',
                            }}
                        ></span>
                    </h6>
                    <h3
                        style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#222',
                            marginBottom: '40px',
                        }}
                    >
                        Our Team Member
                    </h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '20px',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            Width: '400px',
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
                                width: '250px',
                                height: '150px',
                                margin: '0 auto',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform = 'scale(1.1)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = 'scale(1)')
                            }
                        >
                            <Image
                                src={president.image}
                                alt={president.name}
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
                                {president.name}
                            </h3>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: '#777',
                                }}
                            >
                                {president.designation}
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
                            {president.socialLinks.map(({ name, href, icon }, index) => (
                                <Link href={href} key={index}>
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
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TeamThree;
