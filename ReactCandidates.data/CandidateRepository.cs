using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidates.data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;

        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> GetCandidates(RegistrationStatus status)
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }


        public List<Candidate> GetAllConfirmed()
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Confirmed).ToList();
        }



        public List<Candidate> GetAllRefused()
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Refused).ToList();
        }

        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public int GetPendingCount()
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Pending).Count();
        }
        public int GetRefusedCount()
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Refused).Count();
        }
        public int GetConfirmedCount()
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Confirmed).Count();
        }

        public Candidate GetById(int id)
        {
            using var context = new CandidateContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateCandidate(Candidate candidate)
        {
            using var context = new CandidateContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }
    }

}
