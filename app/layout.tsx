import { fonts } from './fonts';
import { Providers } from './providers';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={(fonts.varela_round.variable, fonts.yaldevi.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
