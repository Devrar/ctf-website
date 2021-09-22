import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  main: {
    width: '70%',
    margin: "auto"
  }
});

const RSA = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography variant="h3" align="center" gutterBottom>
          RSA
        </Typography>
        <p>
          The RSA cryptosystem, published in 1977 by Rivest, Shamir and Adleman, is one of the main public-key cryptosystems. The cryptosystem is based on the difficulty of inverting the exponentiation modulo an integer. Here there is a brief description step by step on how the cryptosystem works. 
        </p>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Working modulo integers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Latex>
                We say that two integers $m_1$ and $m_2$ are congruent modulo an integer $m$ if $m$ divides $m_1 - m_2$. It is easy to see (exercise) that this is an equivalence relation and the equivalence classes coincide with the possible reminders of the division with $n$.
                We denote the set of these classes with $Z_n$.
              </Latex>
              <br></br>
              <Latex>
                Inside $Z_n$ we can execute the usual operations of addition and multiplication, since we have $$(m_1 \mod n)\cdot(m_2 \mod n) = (m_1\cdot m_2 \mod n)$$ and $$(m_1 \mod n) + (m_2 \mod n) = (m_1 + m_2 \mod n).$$
              </Latex>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Fermat's Little Theorem</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Latex>
                We denote with $\phi(n)$ the number of integers less than or equal to $n$ that are coprime with $n$. Fermat's Little Theorem states that, for every integer $m$ such that $\gcd(n, m) = 1$, we have
                $$
                m^&#123;\phi(n)&#125; = 1 \mod n.
                $$
              </Latex>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>RSA basis</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Latex>
                Let $n$ be an integer of the form $n = p\cdot q$ where $p$ and $q$ are two prime numbers. Let $e$ be an integer coprime with $\phi(n) = (p-1)\cdot(q-1)$ and $d$ such that $e\cdot d = 1 \mod \phi(n)$, that is $e\cdot d = k\cdot \phi(n) + 1$ for some integer $k$.
                Then, for every integer $1\leq m \leq n-1$ we have
                $$
                (m^e)^d = m^&#123;e\cdot d&#125; = m^&#123;k\cdot \phi(n) + 1&#125; = (m^k)^&#123;\phi(n)&#125;\cdot m = m \mod n,
                $$
                by Fermat's Little Theorem (this is not really true, since we have to consider separately the case where $m$ is not coprime with $n$, but it in the end everything works fine).
              </Latex>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>RSA cryptosystem</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Latex>
                Let $n$ be an integer product of two primes $p$ and $q$ (the primes are usually at least of $1024$ bits). Let $1 \leq e\leq \phi(n)$ be an integer coprime with $\phi(n)$. The public key of the cryptosystem consists of the two integers $n$ (which is the modulus) and $e$ (which is the public exponent). The private key consists of the integer $1 \leq d\leq \phi(n)$ such that $e\cdot d = 1 \mod \phi(n)$.
              </Latex>
              <br></br>
              <Latex>
                If Bob wants to send a message $m$ (encoded as an integer in the range $[1, n]$) to Alice, he encrypts with the public key by computing $c = m^e \mod n$.
              </Latex>
              <br></br>
              <Latex>
                Alice can decrypt the message using her private key $d$ by computing $c^d = (m^e)^d = m \mod n$ (as seen before).
              </Latex>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Security of RSA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Latex>
                The security of RSA is based on the difficulty of factorizing $n$ and of finding $\phi(n)$ from $n$. Indeed, if Eve knows the public key $(n, e)$ and the factorization $n = p\cdot q$ of $n$, then can easily compute $\phi(n) = (p-1)\cdot (q-1)$ and then $d = e^&#123;-1&#125; \mod \phi(n)$.
              </Latex>
              <br></br>
              <Latex>
                The best factorization algorithms are subexponential in the number of bits of $n$, thus if $n$ is large enough, factorizing it is infeasible. Since in almost any challenge you have to factorize $n$ with some of the most efficient algorithms, we won't cover those. 
              </Latex>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        Here there is a list of the attacks I've found in CTFs, with some related challenges. I've divided them based on the characteristics of the attack. 
      </div>
    </div>
  )
}

export default RSA;