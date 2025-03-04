'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

// Import team images
import teamImage1 from "@/assets/images/team/1.png";
import teamImage2 from "@/assets/images/team/2.png";
import teamImage3 from "@/assets/images/team/3.png";
import teamImage4 from "@/assets/images/team/4.png";
import teamImage5 from "@/assets/images/team/5.png";

// Team data with hierarchical structure
const teamData = [
  {
    name: 'Mueez Asif',
    designation: 'President',
    image: teamImage4,
    subMembers: [
      {
        name: 'Farhan - Uddin' ,
        designation: 'Leader IT',
        image: teamImage5, // Replace with Farhan's image if available
        subMembers: [],
      },
      {
        name: 'Muzammil Hussain',
        designation: "Digital Marketing & Operations",
        image: teamImage1,
      },
      {
        name: "Jawad Ahmad",
        designation: "Data Scientist & AI Developer",
        image: teamImage3,
      },
      {
        name: "Usama Hanif",
        designation: "Web & Mobile App Developer",
        image: teamImage2,
      },
    ],
  },
];

// Recursive component to render the tree structure
const TeamMember = ({ member, isRoot = false }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '20px',
      }}
    >
      {/* Member Card */}
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          width: '250px', // Fixed width
          minHeight: '300px', // Minimum height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
            margin: '0 auto 15px',
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
        <h3
          style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#222',
            marginBottom: '10px',
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: '16px',
            color: '#777',
            marginBottom: '10px',
          }}
        >
          {member.designation}
        </p>
      </div>

      {/* Vertical line for sub-members */}
      {member.subMembers && member.subMembers.length > 0 && (
        <div
          style={{
            position: 'relative',
            height: '20px',
            width: '2px',
            backgroundColor: '#004aad',
            margin: '10px 0',
          }}
        ></div>
      )}

      {/* Render sub-members */}
      {member.subMembers && member.subMembers.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            position: 'relative',
          }}
        >
          {/* Horizontal line for sub-members */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `calc(100% - 40px)`,
              height: '2px',
              backgroundColor: '#004aad',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>

          {member.subMembers.map((subMember, index) => (
            <TeamMember key={index} member={subMember} />
          ))}
        </div>
      )}
    </div>
  );
};

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
            Meet The Team Member Solution
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
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {teamData.map((member, index) => (
            <TeamMember key={index} member={member} isRoot={true} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamThree;