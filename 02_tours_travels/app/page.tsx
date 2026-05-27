import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      HomePage

    <h1 className="text-3xl">this is heading</h1>

    <Link href="/sign-in">sign in</Link> <br />
    <Link href="/sign-up">sign up</Link> <br />
    <Link href="/test_route">test route</Link> <br />
    </div>
  )
}

export default HomePage