using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Model;

namespace WebApp.Services
{
    public class ContactService
    {
        private List<Contact> _contacts;
        public ContactService()
        {
            _contacts = new List<Contact>();
            _contacts.Add(new Contact(0, "Suvi", "Tervo", "45", "Tie 3", "Janakkala"));
            _contacts.Add(new Contact(1, "Janne", "Sievä", "45", "Tie 3", "Janakkala"));
        }

        public List<Contact> FindAllContacts()
        {
            return _contacts;
        }

        public Contact FindContactById(int id)
        {
            return _contacts.FirstOrDefault(contact => contact.Id.Equals(id));
        }

        public List<Contact> FindContactsByFirstName(string firstname)
        {
            return _contacts.FindAll(contact => contact.Firstname.Equals(firstname));
        }

        public void SaveContact(Contact contact)
        {
            _contacts.Add(new Contact(GetId(), contact.Firstname, contact.Lastname, contact.Age, contact.Address, contact.City));
        }

        private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();

            //if (lastSaved != null)
            //{
            //    lastSaved.Id + 1;
            //}
            //return 1;
            return lastSaved?.Id + 1 ?? 1; //if lastSaved on null, käytetään numeroa 1
        }

    }
}
