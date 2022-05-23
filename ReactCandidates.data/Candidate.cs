﻿using System;

namespace ReactCandidates.data
{
    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Number { get; set; }
        public string Notes { get; set; }
        public RegistrationStatus Status { get; set; }
    }
}
