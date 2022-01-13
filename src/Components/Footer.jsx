const Footer = () => {
  return (
    <footer className="bg-[#181E2D] p-5 sm:flex sm:items-center sm:justify-between">
      <section className="text-white space-y-5">
        <h3 className="text-xl font-light text-emerald-600">Note</h3>
        <h4>This catalog is still a work-in-progress.</h4>
        <h5>
          Help make it more comprehensive by{" "}
          <a href="/create-resource">submitting new resources.</a>
        </h5>
        <h3 className="text-xl font-light text-emerald-600">Contact</h3>
        <h4>Feel free to reach out on Telegram if any questions:</h4>
        <h5>
          <a href="/dummy">https://dummylink.tm</a>
        </h5>
      </section>
      <section>
        <img src="./qrImage.png" alt="qr image" />
      </section>
    </footer>
  )
}

export default Footer
