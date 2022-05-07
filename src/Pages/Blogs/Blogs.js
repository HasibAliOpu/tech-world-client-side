import React from "react";

const Blogs = () => {
  return (
    <div className="text-center font-mono font-semibold">
      {/* First Question Answer */}
      <div className="mt-5">
        <h1 className="text-2xl">Difference Between JavaScript and NodeJs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <div className="px-5">
            <h1 className="text-2xl border-b-2 border-red-500">JavaScript</h1>
            <p>
              Javascript is a high-level scripting language. the language is
              used for writing scripts on the website. JavaScript can only be
              run in the browsers.It's basically used on for the client-side. Js
              is capable to add HTML and play with the DOM. JavaScript was
              upgraded and now it's call ECMA Script,that use Chrome V8 engine
              and V8 is written in C++
            </p>
          </div>
          <div className="px-5">
            <h1 className="text-2xl border-b-2 border-green-500">NodeJs</h1>
            <p>
              NodeJs is a cross-platform and opensource JS runtime environment
              that allows the JS to be run on the server-side. NodeJs are
              helping JavaScript to run outside of browser,NodeJs does not have
              capability to add HTML tags.V8 is the JavaScript engine inside of
              node.js that parses and runs JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* Second Question Answer */}
      <div className="mt-5">
        <h1 className="text-2xl">Difference Between SQL and NoSQL Database</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <div className="px-5">
            <h1 className="text-2xl border-b-2 border-yellow-500">
              SQL Database
            </h1>
            <p>
              SQL database are primarily called as RElational database,SQL
              database defines and manipulate data based structured query
              language. seeing from a side this language is extremely powerful.
              It's almost all situations SQL database are vertically scalable.
              This Means that you can increase the load on a single server by
              increasing things like RAM,CPU or SSD. SQL databases follow ACID
              properties (Atomicity, Consistency, Isolation and Durability)
            </p>
          </div>
          <div className="px-5">
            <h1 className="text-2xl border-b-2 border-blue-500">
              NoSQL Database
            </h1>
            <p>
              NoSQL database are primarily called as non-relational database.
              NoSQL database has dynamic schema for unstructured data. Data is
              stored in many ways.And It's similar to adding more floors to the
              same building versus adding more building to the neighborhood.
              NoSQL database follows the Brewers CAP theorem (Consistency,
              Availability and Partition tolerance).
            </p>
          </div>
        </div>
      </div>
      {/* Third Question Answer */}
      <div className="py-5 px-14">
        <h1 className="text-2xl border-b-2 border-indigo-500">
          What is JWT and How Does it Work
        </h1>
        <p>
          JWT(JSON Web Token) is an open standard used to share security
          information between two parties a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.JWTs differ from other web
          tokens in that they contain a set of claims. Claims are used to
          transmit information between two parties. What these claims are
          depends on the use case at hand.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
