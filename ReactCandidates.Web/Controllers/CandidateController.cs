using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidates.data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidates.Web.Controllers
{
     [Route("api/[controller]")]
        [ApiController]
        public class CandidateController : ControllerBase
        {
            private string _connectionString;

            public CandidateController(IConfiguration configuration)
            {
                _connectionString = configuration.GetConnectionString("ConStr");
            }

            [HttpGet]
            [Route("getall")]
            public List<Candidate> GetAll(RegistrationStatus status )
            {
                var repo = new CandidateRepository(_connectionString);
                return repo.GetCandidates(status);
            }

        [HttpGet]
        [Route("getallconfirmed")]
        public List<Candidate> GetAllConfirmed()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetAllConfirmed();
        }


        [HttpGet]
        [Route("getallrefused")]
        public List<Candidate> GetAllRefused()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetAllRefused();
        }



        [HttpPost]
            [Route("addcandidate")]
            public void AddCandidate(Candidate candidate)
            {
                var repo = new CandidateRepository(_connectionString);
                repo.AddCandidate(candidate);
            }

        [HttpGet]
        [Route("getrefused")]
        public object GetRefused()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetRefusedCount()};
        }



        [HttpGet]
        [Route("getpending")]
        public object GetPending()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetPendingCount() };
        }

        [HttpGet]
        [Route("getconfirmed")]
        public object GetConfirmed()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetConfirmedCount() };
        }

        [HttpGet]
        [Route("getByid")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetById(id);
        }

        [Route("refusecandidate")]
        [HttpPost]
        public void RefuseCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.Status = RegistrationStatus.Refused;
            repo.UpdateCandidate(candidate);
        }
        [Route("confirmcandidate")]
        [HttpPost]
        public void ConfirmCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.Status = RegistrationStatus.Confirmed;
            repo.UpdateCandidate(candidate);
        }

    }
        }

