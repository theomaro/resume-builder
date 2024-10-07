function NewsLetter() {
  return (
    <form className="p-8 shadow-md space-y-5">
      <h3 className="text-xl font-medium">Newsletter Signup</h3>

      <div className="flex border border-teal-700 rounded-lg overflow-hidden border-collapse">
        <input
          type="email"
          id="newsletter-email"
          name="newsletter-email"
          placeholder="Enter Your Email"
          className="flex-1 outline-none p-2"
        />
        <button className="border-s border-s-teal-700 font-medium px-8 py-2 text-nowrap text-center">
          Register
        </button>
      </div>
    </form>
  );
}

export default NewsLetter;
