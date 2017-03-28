using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model;
using WebApp.Services;

namespace WebApp.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private static ContactService _contactService = new ContactService();

        // GET api/contacts
        [HttpGet]
        public List<Contact> Get() // get all contacts
        {
            return _contactService.FindAllContacts();
        }

        // GET api/contacts/1
        [HttpGet("{id}")]
        public Contact Get(int id) // get contact by id
        {
            return _contactService.FindContactById(id);
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactService.SaveContact(contact);
        }

        // PUT api/contacts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/contacts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
