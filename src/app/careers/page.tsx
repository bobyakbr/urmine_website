export default function Careers() {
    // Simulated dynamic job data
    const jobs = [
      {
        id: 1,
        title: 'Software Engineer',
        location: 'Remote',
        description: 'Join our team to develop innovative software solutions...',
        applyLink: '/apply/software-engineer'
      },
      {
        id: 2,
        title: 'Field Support Engineer',
        location: 'Indonesia, Jakarta',
        description: 'Assist project deployment, including installation and training with the end user, and support post-sales process...',
        applyLink: '/apply/data-scientist'
      },
      {
        id: 3,
        title: 'Project Manager',
        location: 'Indonesia, Jakarta',
        description: 'Lead cross-functional teams to deliver complex technology projects...',
        applyLink: '/apply/project-manager'
      },
    
    ];
  
    return (
      <div className="py-16 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Careers at URMINE</h1>
        <p className="text-lg text-center mb-8">
          Explore career opportunities across various fields and join a team dedicated to shaping the future of technology.
        </p>
  
        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <a 
                  href={job.applyLink}
                  className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full mt-4 hover:bg-blue-700 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }