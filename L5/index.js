// array of objects
const users = [
    {
        id: 1,
        name: "Alice Johnson",
        username: "alicej",
        email: "alice.johnson@example.com",
        password: "hashed_pw_1", // never store plain text in real apps
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "admin",
        status: "active",
        bio: "Full-stack developer and coffee enthusiast.",
        location: "Toronto, Canada",
        phone: "+1-416-555-0101",
        website: "https://alicejohnson.dev",
        postsCount: 24,
        followers: 1200,
        following: 180,
        emailVerified: true,
        createdAt: "2023-05-14T09:00:00Z",
        updatedAt: "2024-02-20T11:30:00Z",
    },
    {
        id: 2,
        name: "Marcus Lee",
        username: "marcuslee",
        email: "marcus.lee@example.com",
        password: "hashed_pw_2",
        avatar: "https://i.pravatar.cc/150?img=12",
        role: "editor",
        status: "active",
        bio: "Writing about JavaScript, async patterns, and clean code.",
        location: "Seoul, South Korea",
        phone: "+82-10-555-0102",
        website: "https://marcuslee.io",
        postsCount: 17,
        followers: 860,
        following: 240,
        emailVerified: true,
        createdAt: "2023-08-02T13:20:00Z",
        updatedAt: "2024-03-01T08:15:00Z",
    },
    {
        id: 3,
        name: "Priya Nair",
        username: "priyanair",
        email: "priya.nair@example.com",
        password: "hashed_pw_3",
        avatar: "https://i.pravatar.cc/150?img=25",
        role: "author",
        status: "active",
        bio: "Frontend dev. CSS nerd. Occasional sketcher.",
        location: "Bangalore, India",
        phone: "+91-98765-43210",
        website: "https://priyacodes.com",
        postsCount: 9,
        followers: 430,
        following: 310,
        emailVerified: false,
        createdAt: "2024-01-10T07:45:00Z",
        updatedAt: "2024-03-08T16:20:00Z",
    },
    {
        id: 4,
        name: "Diego Alvarez",
        username: "diegoalv",
        email: "diego.alvarez@example.com",
        password: "hashed_pw_4",
        avatar: "https://i.pravatar.cc/150?img=33",
        role: "author",
        status: "inactive",
        bio: "Backend engineer. GraphQL apologist. Runner.",
        location: "Mexico City, Mexico",
        phone: "+52-55-5555-0104",
        website: "https://diegoalvarez.mx",
        postsCount: 6,
        followers: 275,
        following: 120,
        emailVerified: true,
        createdAt: "2023-11-19T17:05:00Z",
        updatedAt: "2024-04-01T10:05:00Z",
    },
];

// arrays of names
function m1() {
    return users.map(e => e.username);
}
// total posts count
function m2() {
    return users.reduce((a, b) => a + b.postsCount,0);
}
// avg of followers
function m3() {
    const count = users.length;
    const total = users.reduce((a, b) => a + b.followers,0);
    return total / count
}
// filter emailVerified
function m4() {
    return users.filter(e => e.emailVerified)
}
// max following
function m5() {
    return users.reduce((a, b) => a.following > b.following? a: b);
}
// console.log(m5())