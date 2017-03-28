using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Model
{
    public class Contact
    {
        private int id;
        private string firstname;
        private string lastname;
        private string age;
        private string address;
        private string city;

        public Contact(int id, string firstname, string lastname, string age, string address, string city)
        {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
            this.address = address;
            this.city = city;
        }

        public int Id // read only - ones set, you can't change it
        {
            get { return id; }
        }

        public string Firstname
        {
            get { return firstname; }
            set { firstname = value; }
        }

        public string Lastname
        {
            get { return lastname; }
            set { lastname = value; }
        }

        public string Age
        {
            get { return age; }
            set { age = value; }
        }

        public string Address
        {
            get { return address; }
            set { address = value; }
        }

        public string City
        {
            get { return city; }
            set { city = value; }
        }
    }
}
