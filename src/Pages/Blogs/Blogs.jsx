
const Blogs = () => {
    return (
        <div className="w-3/4">
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Acces token and refresh token are secrent token that connceted with database. this need to be secret and not recomened to store in client. but if need 
You can store tokens securely in HttpOnly cookies</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL database is mainly relational database on the other hand NoSQL is not.
                        <br /> 
                        example of SQL is MySQL, and noSQL is MongoDB.
                        
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express is a  Node.js web application framework that provides a robust set of features for web and mobile applications.
                        it is used for server side works
                        <br /> 
                        NestJS is a  Node. js framework that helps build server-side applications. and it extends express.js

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;