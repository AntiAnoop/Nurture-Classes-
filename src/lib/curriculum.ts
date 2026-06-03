/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubjectPaper } from '../types';

export const curriculumData: SubjectPaper[] = [
  {
    id: 'algebra',
    name: 'Mathematics Part 1 (Algebra)',
    code: 'algebra',
    chaptersCount: 6,
    chapters: [
      {
        id: 'linear-equations',
        number: 1,
        title: 'Linear Equations in Two Variables',
        duration: '22m 15s',
        topics: [
          {
            id: 'alg-1-1',
            number: 1,
            title: 'Simultaneous Linear Equations',
            summary: 'Simultaneous linear equations are a set of two or more equations with the same variables. We solve them using addition, subtraction, or substitution to find value sets satisfying all equations concurrently.'
          },
          {
            id: 'alg-1-2',
            number: 2,
            title: 'Graphical Method of Solving',
            summary: 'In this method, we plot the given linear equations on a Cartesian graph as straight lines. The point of intersection represents the common ordered pair solution satisfying both equations simultaneously.'
          },
          {
            id: 'alg-1-3',
            number: 3,
            title: 'Cramers Rule (Determinants)',
            summary: 'Determinants are helpful mathematical objects representing specific matrix operations. Cramers Rule offers an algorithmic, algebraic method using determinant ratios to solve simultaneous linear systems directly.'
          },
          {
            id: 'alg-1-4',
            number: 4,
            title: 'Equations Reducible to Linear Form',
            summary: 'Certain non-linear equations can be simplified into linear equations through suitable variable substitutions. Once converted, standard elimination or graphical methods are applied to determine the original variables.'
          },
          {
            id: 'alg-1-5',
            number: 5,
            title: 'Word Problems & Application',
            summary: 'This covers practical word problems by transforming descriptive English statements into mathematical linear equations. It reinforces problem-solving in real-life contexts like age, distance, and coin distributions.'
          }
        ]
      },
      {
        id: 'quadratic-equations',
        number: 2,
        title: 'Quadratic Equations',
        duration: '26m 40s',
        topics: [
          {
            id: 'alg-2-1',
            number: 1,
            title: 'Standard Form & Factorisation',
            summary: 'A quadratic equation follows the standard form ax^2 + bx + c = 0. Solving by factorisation involves splitting the middle term to group terms and express the quadratic expression as a product of two linear factors.'
          },
          {
            id: 'alg-2-2',
            number: 2,
            title: 'Completing the Square Method',
            summary: 'The method of completing the square converts any quadratic expression into a perfect square trinomial. This algebraic technique helps derive the quadratic formula and provides alternative solving procedures.'
          },
          {
            id: 'alg-2-3',
            number: 3,
            title: 'The Quadratic Formula',
            summary: 'The quadratic formula expresses roots directly as x = (-b ± √(b^2 - 4ac)) / 2a. It guarantees a solution for any real quadratic equation and forms the analytical foundation of second-order algebra.'
          },
          {
            id: 'alg-2-4',
            number: 4,
            title: 'Nature of Roots (Discriminant)',
            summary: 'The term b^2 - 4ac is called the discriminant (Δ). If Δ > 0, roots are real and unequal; if Δ = 0, they are real and equal; if Δ < 0, roots are non-real complex conjugates.'
          },
          {
            id: 'alg-2-5',
            number: 5,
            title: 'Roots Relations & Applications',
            summary: 'This explains the formal connection between roots and coefficients where sum is -b/a and product is c/a. Real-world applications include speed, work-rate, and geometric area optimization problems.'
          }
        ]
      },
      {
        id: 'arithmetic-progression',
        number: 3,
        title: 'Arithmetic Progression (A.P.)',
        duration: '18m 50s',
        topics: [
          {
            id: 'alg-3-1',
            number: 1,
            title: 'Sequences and Common Difference',
            summary: 'An Arithmetic Progression is a ordered sequence of numbers where the difference between consecutive terms is constant. This fixed difference is termed the common difference, represented by d.'
          },
          {
            id: 'alg-3-2',
            number: 2,
            title: 'General Term (tn) Formula',
            summary: 'The general n-th term of an A.P. is given by the formula tn = a + (n - 1)d, where a is the first term. This allows direct calculation of any arbitrary term in the progression without generating preceding values.'
          },
          {
            id: 'alg-3-3',
            number: 3,
            title: 'Sum of n Terms (Sn) Formula',
            summary: 'The sum of the first n terms follows Sn = n/2 * [2a + (n - 1)d] or Sn = n/2 * [t1 + tn]. This summation is essential for modeling cumulative patterns, financial savings, and linear growth rates.'
          },
          {
            id: 'alg-3-4',
            number: 4,
            title: 'Practical Word Problems',
            summary: 'This applies AP formulas to practical scenarios like stadium seating arrangements, saving schedules, and loan repayments. It trains students to extract parameters and index sequential variables correctly.'
          }
        ]
      },
      {
        id: 'financial-planning',
        number: 4,
        title: 'Financial Planning',
        duration: '24m 10s',
        topics: [
          {
            id: 'alg-4-1',
            number: 1,
            title: 'Introduction to GST Concepts',
            summary: 'Goods and Services Tax is an indirect comprehensive tax levied on supply chains. It split into central tax (CGST) and state tax (SGST), with equal share distribution of the net applicable rates.'
          },
          {
            id: 'alg-4-2',
            number: 2,
            title: 'Shares, Face Value & Market Value',
            summary: 'A share represents fractional ownership in a joint-stock company. Face value is fixed on the certificate, while Market Value changes daily based on consumer supply and demand across public exchanges.'
          },
          {
            id: 'alg-4-3',
            number: 3,
            title: 'Brokerage and Mutual Funds',
            summary: 'Brokerage is commission fees paid to agents processing financial trades. Mutual Funds aggregate capital across multiple retail investors to buy diversified portfolios managed by specialized fund managers.'
          }
        ]
      },
      {
        id: 'probability',
        number: 5,
        title: 'Probability',
        duration: '15m 05s',
        topics: [
          {
            id: 'alg-5-1',
            number: 1,
            title: 'Random Experiment & Outcomes',
            summary: 'A random experiment has well-defined outcomes that cannot be predicted with total certainty prior to execution. Tossing coins, rolling dice, or selecting cards are standard probability experiments.'
          },
          {
            id: 'alg-5-2',
            number: 2,
            title: 'Sample Space and Number of Points',
            summary: 'The sample space (S) represents the exhaustive set of all possible outcomes of an experiment. The total number of events in S is represented by n(S), which serves as the division denominator in computations.'
          },
          {
            id: 'alg-5-3',
            number: 3,
            title: 'Probability of an Event',
            summary: 'The probability of an event A is given by P(A) = n(A) / n(S), where n(A) is the count of favorable sample points. It represents a real number strictly bounded between 0 and 1.'
          }
        ]
      },
      {
        id: 'statistics',
        number: 6,
        title: 'Statistics',
        duration: '28m 30s',
        topics: [
          {
            id: 'alg-6-1',
            number: 1,
            title: 'Mean Analysis & Calculation',
            summary: 'Mean is the central average computed by three distinct methodologies: Direct Method, Assumed Mean Method, and Step Deviation Method. These methods help simplify complex grouped arithmetic operations.'
          },
          {
            id: 'alg-6-2',
            number: 2,
            title: 'Median for Grouped Data',
            summary: 'Grouped data median is computed finding the cumulative frequency class boundary and applying the interpolation formula L + [(n/2 - cf)/f] * h. It defines the stable middle split of a continuous distribution.'
          },
          {
            id: 'alg-6-3',
            number: 3,
            title: 'Mode for Continuous Distribution',
            summary: 'Mode represents the value of maximum concentration. It requires identifying the modal class and executing the formula L + [(f1 - f0)/(2f1 - f0 - f2)] * h using surrounding class densities.'
          },
          {
            id: 'alg-6-4',
            number: 4,
            title: 'Graphical Represent (Pie Chart, Ogive)',
            summary: 'Data visualized using histograms, frequency polygons, and circular pie charts. Pie charts represent components proportionally to 360 degrees using central angle calculations (Component / Total * 360).'
          }
        ]
      }
    ]
  },
  {
    id: 'geometry',
    name: 'Mathematics Part 2 (Geometry)',
    code: 'geometry',
    chaptersCount: 7,
    chapters: [
      {
        id: 'similarity',
        number: 1,
        title: 'Similarity',
        duration: '21m 40s',
        topics: [
          {
            id: 'geom-1-1',
            number: 1,
            title: 'Ratio of Areas of Triangles',
            summary: 'The ratio of areas of two triangles is equal to the ratio of the products of their bases and corresponding heights. If bases or heights are equal, the ratios simplify to match height or base ratios.'
          },
          {
            id: 'geom-1-2',
            number: 2,
            title: 'Basic Proportionality Theorem (BPT)',
            summary: 'If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides them in the same ratio. The converse states that proportional division implies parallel configuration.'
          },
          {
            id: 'geom-1-3',
            number: 3,
            title: 'Tests of Similarity of Triangles',
            summary: 'Triangles are similar if their corresponding angles are congruent and sides are proportional. Tests like AA, SAS, and SSS provide sufficient minimal conditions to establish geometric similarity.'
          },
          {
            id: 'geom-1-4',
            number: 4,
            title: 'Areas of Similar Triangles Theorem',
            summary: 'The ratio of areas of two similar triangles is equal to the ratio of the squares of their corresponding sides. This quadratic behavior is fundamental in dimensional scaling proofs.'
          }
        ]
      },
      {
        id: 'pythagoras-theorem',
        number: 2,
        title: 'Pythagoras Theorem',
        duration: '19m 25s',
        topics: [
          {
            id: 'geom-2-1',
            number: 1,
            title: 'Similarity and Right Angled Triangles',
            summary: 'In a right-angled triangle, the perpendicular drawn from vertex to hypotenuse divides the triangle into two sub-triangles. These are similar to each other and to the parent right-angled triangle.'
          },
          {
            id: 'geom-2-2',
            number: 2,
            title: 'Geometric Mean Theorem',
            summary: 'The altitude drawn to the hypotenuse of a right-angled triangle is the geometric mean of the segments into which the hypotenuse is divided by the altitude foot (h^2 = x * y).'
          },
          {
            id: 'geom-2-3',
            number: 3,
            title: 'Pythagorean Triplets & Proof',
            summary: 'A set of three numbers (a, b, c) where c^2 = a^2 + b^2 forms a Pythagorean triplet. Standard proofs and derivations establish this cornerstone of Euclidean metric measurement.'
          },
          {
            id: 'geom-2-4',
            number: 4,
            title: 'Apollonius Theorem',
            summary: 'For any arbitrary triangle, Apollonius Theorem relates sides and medians: AB^2 + AC^2 = 2 * (AM^2 + BM^2), where M is the midpoint of BC. This extends right-angle metric logic to obtuse geometries.'
          }
        ]
      },
      {
        id: 'circle',
        number: 3,
        title: 'Circle',
        duration: '27m 50s',
        topics: [
          {
            id: 'geom-3-1',
            number: 1,
            title: 'Tangent Theorems and Secants',
            summary: 'A tangent is perpendicular to the radius at the point of contact. Alternate segment and tangent-secant segment relations are established for intersecting elements inside or outside the circle.'
          },
          {
            id: 'geom-3-2',
            number: 2,
            title: 'Touching Circles',
            summary: 'If two circles touch each other, their point of contact lies on the line passing through their centers. The center distance is the sum (external touch) or difference (internal touch) of radii.'
          },
          {
            id: 'geom-3-3',
            number: 3,
            title: 'Arc and Angle Intercept Theorems',
            summary: 'An inscribed angle is half the measure of its intercepted central arc. Central angles match arc measures directly, establishing proportional rotation systems.'
          },
          {
            id: 'geom-3-4',
            number: 4,
            title: 'Cyclic Quadrilateral Theorem',
            summary: 'A cyclic quadrilateral has all four vertices on a single circle. Its opposite angles are supplementary (sum to 180°), an essential constraint for trigonometric and radial proofs.'
          }
        ]
      },
      {
        id: 'geometric-constructions',
        number: 4,
        title: 'Geometric Constructions',
        duration: '16m 12s',
        topics: [
          {
            id: 'geom-4-1',
            number: 1,
            title: 'Constructing Similar Triangles',
            summary: 'This involves scale-modifying triangles using parallel ratios. When triangles share a common vertex, direct proportional rays are drawn to locate scaled vertices precisely.'
          },
          {
            id: 'geom-4-2',
            number: 2,
            title: 'Tangent to a Circle (Center vs No Center)',
            summary: 'Drawing tangents to a circle from points on it or external to it. Constructions make use of perpendicular bisectors and auxiliary concentric arcs to establish true orthogonal alignments.'
          }
        ]
      },
      {
        id: 'co-ordinate-geometry',
        number: 5,
        title: 'Co-ordinate Geometry',
        duration: '20m 05s',
        topics: [
          {
            id: 'geom-5-1',
            number: 1,
            title: 'Distance Formula derivation',
            summary: 'The straight-line distance between two points on a 2D grid is given by √[(x2-x1)^2 + (y2-y1)^2]. It adapts Pythagorean coordinate projections to compute direct spatial metrics.'
          },
          {
            id: 'geom-5-2',
            number: 2,
            title: 'Section Formula & Centroid',
            summary: 'Section formula determines coordinates of a point dividing a segment internally in m:n ratio. Centroid of a triangle represents average coordinates: ((x1+x2+x3)/3, (y1+y2+y3)/3).'
          },
          {
            id: 'geom-5-3',
            number: 3,
            title: 'Slope of a Line',
            summary: 'The slope (m) defines line steepness, calculate as m = (y2-y1)/(x2-x1) or m = tan(θ). Parallel lines share equal slopes, while perpendicular lines have negative reciprocal slopes (m1*m2 = -1).'
          }
        ]
      },
      {
        id: 'trigonometry',
        number: 6,
        title: 'Trigonometry',
        duration: '25m 45s',
        topics: [
          {
            id: 'geom-6-1',
            number: 1,
            title: 'Trigonometric Identities & Values',
            summary: 'Fundamental relationships like sin^2(θ) + cos^2(θ) = 1, 1 + tan^2(θ) = sec^2(θ) and 1 + cot^2(θ) = cosec^2(θ) are proved. These identities aid in simplifying complex angular expressions.'
          },
          {
            id: 'geom-6-2',
            number: 2,
            title: 'Heights and Distances (Applications)',
            summary: 'Trigonometric ratios are applied to compute real structural dimensions. Angles of elevation and depression are used alongside observer metrics to estimate absolute heights of towers or widths of roads.'
          }
        ]
      },
      {
        id: 'mensuration',
        number: 7,
        title: 'Mensuration',
        duration: '24m 30s',
        topics: [
          {
            id: 'geom-7-1',
            number: 1,
            title: 'Area and Volume: Cylinder and Cone',
            summary: 'Formulas for curved surface elements, total base boundaries, and interior volumetric displacement of cylinders (πr^2h) and cones (1/3 * πr^2h). Standard derivations are covered.'
          },
          {
            id: 'geom-7-2',
            number: 2,
            title: 'Sphere and Hemisphere Metrics',
            summary: 'Covers geometric properties of fully symmetrical spheres and hemisphere cross-sections. Volume of a sphere remains 4/3 * πr^3 while surface is 4πr^2, demanding careful dimensional conversions.'
          },
          {
            id: 'geom-7-3',
            number: 3,
            title: 'Frustum of a Cone & Compound Solids',
            summary: 'A frustum represents a cone truncated parallel to its base. Total capacity and surface boundaries are computed using specialized radii-difference formulas across complex mechanical mockups.'
          }
        ]
      }
    ]
  },
  {
    id: 'science-part-1',
    name: 'Science & Technology Part 1',
    code: 'science-1',
    chaptersCount: 9,
    chapters: [
      {
        id: 'gravitation',
        number: 1,
        title: 'Gravitation',
        duration: '21m 15s',
        topics: [
          {
            id: 'sci1-1-1',
            number: 1,
            title: 'Newtons Universal Law of Gravitation',
            summary: 'Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of their center-center distance.'
          },
          {
            id: 'sci1-1-2',
            number: 2,
            title: 'Keplers Laws of Planetary Motion',
            summary: 'Keplers three laws state that planets move in elliptical orbits with the Sun at one focus, equal areas are swept in equal times, and orbit periods squared trace mean semi-major axes cubed (T^2 ∝ r^3).'
          },
          {
            id: 'sci1-1-3',
            number: 3,
            title: 'Free Fall, Mass & Weight',
            summary: 'Free fall occurs when an object accelerates solely under gravity (g = 9.8 m/s^2). Mass measures basic inertia content, while Weight changes across coordinates depending on local gravity forces (W = m*g).'
          },
          {
            id: 'sci1-1-4',
            number: 4,
            title: 'Escape Velocity',
            summary: 'Escape velocity represents the minimum launch speed required for an object to break free from a celestial body\'s gravitational field without additional propulsion, modeled by √[2GM/R].'
          }
        ]
      },
      {
        id: 'periodic-classification',
        number: 2,
        title: 'Periodic Classification of Elements',
        duration: '23m 40s',
        topics: [
          {
            id: 'sci1-2-1',
            number: 1,
            title: 'Dobereiners Triads & Newlands Octaves',
            summary: 'Early organization attempts grouped chemical elements by similarities. Dobereiner noted median weight averages in triplets, while Newlands correlated physical repeating properties to octaves of music.'
          },
          {
            id: 'sci1-2-2',
            number: 2,
            title: 'Mendeleevs Periodic Table',
            summary: 'Dmitri Mendeleev arranged elements by atomic mass, asserting that properties repeat periodically. He left spaces for undiscovered elements, predicting their properties with high accuracy.'
          },
          {
            id: 'sci1-2-3',
            number: 3,
            title: 'Modern Periodic Table Structure',
            summary: 'The modern periodic table is organized by rising atomic number (proton state). It is split into 18 columns (groups) and 7 rows (periods), explaining shell filling sequences.'
          },
          {
            id: 'sci1-2-4',
            number: 4,
            title: 'Periodic Trends & Valency',
            summary: 'Characteristics like valency, atomic size, metallic behavior, and electronegativity show predictable variations down a group or across a period due to varying outer shell shielding.'
          }
        ]
      },
      {
        id: 'chemical-reactions',
        number: 3,
        title: 'Chemical Reactions and Equations',
        duration: '20m 30s',
        topics: [
          {
            id: 'sci1-3-1',
            number: 1,
            title: 'Writing and Balancing Chemical Equations',
            summary: 'Chemical equations represent atomic reorganizations. Balancing ensures mass conservation, matching exact reactant and product atom stoichiometry across both sides.'
          },
          {
            id: 'sci1-3-2',
            number: 2,
            title: 'Types of Chemical Reactions',
            summary: 'Reactions are classified into synthesis, decomposition, displacement, and double displacement. These depend on dynamic electronic exchanges and structural bonding rearrangements.'
          },
          {
            id: 'sci1-3-3',
            number: 3,
            title: 'Oxidation, Reduction & Redox',
            summary: 'Oxidation is oxygen gain or electron loss, whereas reduction is oxygen loss or electron gain. Combined reactions are redox systems, explaining combustion and biochemical metabolism.'
          }
        ]
      },
      {
        id: 'electric-current',
        number: 4,
        title: 'Effects of Electric Current',
        duration: '24m 15s',
        topics: [
          {
            id: 'sci1-4-1',
            number: 1,
            title: 'Heating Effect of Current (Joules Law)',
            summary: 'Electric current traversing resistive metals releases thermal energy, modeled as H = I^2 * R * t. This is used in household irons, water geysers, and safety fuse components.'
          },
          {
            id: 'sci1-4-2',
            number: 2,
            title: 'Magnetic Effects & Electromagnets',
            summary: 'Moving current creates magnetic fields in conductors. Coiling wire around iron cores produces functional electromagnets, providing controllable high-intensity fields for industry.'
          },
          {
            id: 'sci1-4-3',
            number: 3,
            title: 'Electric Motor and Generator Principle',
            summary: 'Motors convert electricity to rotational movement via Flemings Left-Hand Rule. Generators reverse this process, inducing electric current from rotational kinetic energy via electromagnetic induction.'
          }
        ]
      },
      {
        id: 'heat',
        number: 5,
        title: 'Heat',
        duration: '18m 50s',
        topics: [
          {
            id: 'sci1-5-1',
            number: 1,
            title: 'Anomalous Behaviour of Water',
            summary: 'Water contracts instead of expanding when heated from 0°C to 4°C, reaching its peak density at 4°C. This unusual property protects aquatic life in sub-zero climates by forming protective ice surface layers.'
          },
          {
            id: 'sci1-5-2',
            number: 2,
            title: 'Specific Heat Capacity',
            summary: 'Specific heat is the thermal energy needed to raise 1g of a substance by 1°C. High values (such as water) make materials excellent thermal buffers for environmental stabilization.'
          },
          {
            id: 'sci1-5-3',
            number: 3,
            title: 'Latent Heat of Fusion and Vaporization',
            summary: 'Latent heat represents energy absorbed or released during state transitions (e.g., solid-liquid or liquid-gas) at constant temperature, without altering bulk thermal benchmarks.'
          }
        ]
      },
      {
        id: 'refraction-of-light',
        number: 6,
        title: 'Refraction of Light',
        duration: '19m 40s',
        topics: [
          {
            id: 'sci1-6-1',
            number: 1,
            title: 'Laws of Refraction and Snell\'s Law',
            summary: 'As light enters a different medium, its velocity changes, causing it to bend. Snell\'s Law relates entry and exit angles: sin(i) / sin(r) = constant refractive index (n).'
          },
          {
            id: 'sci1-6-2',
            number: 2,
            title: 'Total Internal Reflection & Mirage',
            summary: 'If entry angles in dense media exceed the critical benchmark, light reflects entirely inside instead of refracting. This optical phenomenon explains mirages and modern fiber optic data networks.'
          },
          {
            id: 'sci1-6-3',
            number: 3,
            title: 'Dispersion of Light & Rainbows',
            summary: 'Polychromatic white light passing through clear prisms separates into constituent colors due to varying refractive indices. Raindrops act as tiny prisms, creating rainbows in the sky.'
          }
        ]
      },
      {
        id: 'lenses',
        number: 7,
        title: 'Lenses',
        duration: '22m 30s',
        topics: [
          {
            id: 'sci1-7-1',
            number: 1,
            title: 'Types of Lenses and Ray Diagrams',
            summary: 'Lenses are classified as convex (converging) or concave (diverging). Ray diagrams trace paths of geometric light rays through optical centers and principal focal vertices to predict image positions.'
          },
          {
            id: 'sci1-7-2',
            number: 2,
            title: 'Lens Formula, Magnification & Power',
            summary: 'The lens formula is 1/f = 1/v - 1/u. Power is the inverse focal measure in meters (P = 1/f dioptres), which is used to design corrective eyewear.'
          },
          {
            id: 'sci1-7-3',
            number: 3,
            title: 'Human Eye and Vision Defects',
            summary: 'The eye lenses adjust shape to focus images on the retina. Defects like Myopia and Hypermetropia are corrected using concave or convex lenses to restore correct focal alignments.'
          }
        ]
      },
      {
        id: 'metallurgy',
        number: 8,
        title: 'Metallurgy',
        duration: '23m 10s',
        topics: [
          {
            id: 'sci1-8-1',
            number: 1,
            title: 'Physical & Chemical Properties of Metals',
            summary: 'Metals are lustrous, malleable, ductile, thermal conductors with variable reactivity. They readily lose exterior valence electrons during chemical combinations to form stable basic oxides.'
          },
          {
            id: 'sci1-8-2',
            number: 2,
            title: 'Concentration & Extraction of Ores',
            summary: 'Ores contain metals mixed with soil and rocky impurities (gangue). Methods like gravity separation, hydraulic washing, flotation, and chemical leaching isolate the metallic elements.'
          },
          {
            id: 'sci1-8-3',
            number: 3,
            title: 'Corrosion Prevention and Alloys',
            summary: 'Prevention strategies include painting, galvanizing, anodizing, and electroplating. Alloys are homogeneous mixture solutions of multiple metals designed to improve structural strength and resist oxidation.'
          }
        ]
      },
      {
        id: 'carbon-compounds',
        number: 9,
        title: 'Carbon Compounds',
        duration: '27m 15s',
        topics: [
          {
            id: 'sci1-9-1',
            number: 1,
            title: 'Versatile Nature & Covalent Bonding',
            summary: 'Carbon satisfies its valence requirements by sharing four electrons, forming four covalent bonds. This tetravalency and its ability to chain (catenation) allow it to form millions of unique organic structures.'
          },
          {
            id: 'sci1-9-2',
            number: 2,
            title: 'Hydrocarbons & Functional Groups',
            summary: 'Alkanes, alkenes, and alkynes are categories of simple hydrocarbons. Substituting hydrogen atoms with functional groups like alcohols, aldehydes, or carboxylic acids modifies chemical properties.'
          },
          {
            id: 'sci1-9-3',
            number: 3,
            title: 'IUPAC Nomenclature & Polymers',
            summary: 'The IUPAC naming system provides standard prefixes and suffixes to specify molecule structures. Polymerization is the mechanism of linking small units (monomers) into large, durable repeating networks.'
          }
        ]
      }
    ]
  },
  {
    id: 'science-part-2',
    name: 'Science & Technology Part 2',
    code: 'science-2',
    chaptersCount: 7,
    chapters: [
      {
        id: 'heredity-evolution',
        number: 1,
        title: 'Heredity and Evolution',
        duration: '22m 10s',
        topics: [
          {
            id: 'sci2-1-1',
            number: 1,
            title: 'Transcription, Translation, Translocation',
            summary: 'Proteins are synthesized using genetic info from DNA. Transcription creates messenger RNA, translation decodes it at the ribosome, and translocation shifts the molecular reader along the genetic string.'
          },
          {
            id: 'sci2-1-2',
            number: 2,
            title: 'Evolution Theories & Darwin\'s Selection',
            summary: 'Evolution is the gradual accumulation of traits in organisms over generations. Charles Darwin proposed natural selection, where organisms best adapted to their environment are more likely to survive and reproduce.'
          },
          {
            id: 'sci2-1-3',
            number: 3,
            title: 'Evidences of Evolution',
            summary: 'Support for evolution comes from multiple fields, including homologous structures, vestigial organs, fossil records, embryological stages, and shared genetic and biochemical pathways across species.'
          }
        ]
      },
      {
        id: 'life-processes',
        number: 2,
        title: 'Life Processes in Living Organisms',
        duration: '25m 30s',
        topics: [
          {
            id: 'sci2-2-1',
            number: 1,
            title: 'Cellular Respiration & Energy Production',
            summary: 'Respiration is the metabolic extraction of ATP energy from glucose. Aerobic respiration completes glycolytic, Krebs cycle, and electron transport chain phases to generate energy in the mitochondria.'
          },
          {
            id: 'sci2-2-2',
            number: 2,
            title: 'Cell Division: Mitosis & Meiosis',
            summary: 'Mitosis duplicates somatic cells to aid tissue growth and repair, keeping chromosome counts constant. Meiosis occurs in germ cells, halving chromosome numbers to produce genetic diversity in gametes.'
          },
          {
            id: 'sci2-2-3',
            number: 3,
            title: 'Reproductive Systems & Coordination',
            summary: 'Covers male and female reproductive systems and hormonal controls. Fertilization merges haploid gametes, initiating zygote growth and cell differentiation.'
          }
        ]
      },
      {
        id: 'environmental-management',
        number: 3,
        title: 'Environmental Management',
        duration: '18m 20s',
        topics: [
          {
            id: 'sci2-3-1',
            number: 1,
            title: 'Ecosystems & Energy Flow',
            summary: 'An ecosystem consists of interacting living (biotic) organisms and non-living (abiotic) elements. Energy flows one-way from sun-producers through successive consumer trophic levels.'
          },
          {
            id: 'sci2-3-2',
            number: 2,
            title: 'Pollution, Waste & Ecosystem Shifts',
            summary: 'Human activity introduces chemical and waste pollutants into ecosystems. Accumulation of non-biodegradable waste disrupts food webs and leads to habitat destruction.'
          },
          {
            id: 'sci2-3-3',
            number: 3,
            title: 'Biodiversity Hotspots & Conservation',
            summary: 'Hotspots contain unique species under immediate threat of habitat loss. Conservation strategies focus on national parks, wildlife reserves, and seed banks to preserve genetic diversity.'
          }
        ]
      },
      {
        id: 'towards-green-energy',
        number: 4,
        title: 'Towards Green Energy',
        duration: '20m 10s',
        topics: [
          {
            id: 'sci2-4-1',
            number: 1,
            title: 'Fossil Fuels vs Clean Systems',
            summary: 'Fossil combustion releases carbon emissions that accelerate climate change. Green alternative energy systems utilize clean, replenishing sources that do not produce harmful atmospheric emissions.'
          },
          {
            id: 'sci2-4-2',
            number: 2,
            title: 'Solar and Wind Generating Systems',
            summary: 'Photovoltaic cells convert light energy into electricity, while turbines extract kinetic wind energy. These direct physical processes produce zero toxic combustion byproducts.'
          },
          {
            id: 'sci2-4-3',
            number: 3,
            title: 'Hydro, Geothermal & Nuclear Power',
            summary: 'Hydroelectric setups convert the mechanical energy of falling water into electricity. Geothermal systems tap underground volcanic warmth, while nuclear plants generate power through controlled fission reactions.'
          }
        ]
      },
      {
        id: 'animal-classification',
        number: 5,
        title: 'Animal Classification',
        duration: '23m 45s',
        topics: [
          {
            id: 'sci2-5-1',
            number: 1,
            title: 'History of Classification Systems',
            summary: 'Animal taxonomy evolved from simple anatomical groupings into modern evolutionary systems. Modern classifications analyze cellular structures, body plans, and genetic relationships.'
          },
          {
            id: 'sci2-5-2',
            number: 2,
            title: 'Non-Chordates Phyla details',
            summary: 'Invertebrates lack a supporting backbone. They are divided into phyla based on body symmetry, tissue layers, and specialized characteristics (e.g., Porifera, Cnidaria, Arthropoda, Mollusca).'
          },
          {
            id: 'sci2-5-3',
            number: 3,
            title: 'Chordates & Vertebrates Classes',
            summary: 'Chordates possess a dorsal nerve cord and supporting notochord. Vertebrates are further divided into specialized classes like fish, amphibians, reptiles, birds, and mammals.'
          }
        ]
      },
      {
        id: 'cell-biology',
        number: 6,
        title: 'Cell Biology and Biotechnology',
        duration: '22m 15s',
        topics: [
          {
            id: 'sci2-6-1',
            number: 1,
            title: 'Cytology and General Cell Structure',
            summary: 'Cytology is the scientific study of cellular structures and organelle functions. Plant cells contain rigid cellulose walls, while animal cells are bounded by flexible lipid membranes.'
          },
          {
            id: 'sci2-6-2',
            number: 2,
            title: 'Stem Cells & Organ Transplantation',
            summary: 'Stem cells can differentiate into multiple specialized cell types. This makes them highly valuable for regenerative medicine and growing compatible replacement tissues in the lab.'
          },
          {
            id: 'sci2-6-3',
            number: 3,
            title: 'Industrial Biotechnology applications',
            summary: 'Biotechnology uses biological systems to manufacture industrial goods. Applications include producing antibiotics, hormones like insulin, and fermentation enzymes.'
          }
        ]
      },
      {
        id: 'social-health',
        number: 7,
        title: 'Social Health & Stress Management',
        duration: '16m 50s',
        topics: [
          {
            id: 'sci2-7-1',
            number: 1,
            title: 'Factors affecting Social Health',
            summary: 'Social health is shaped by economic opportunities, safe spaces, clean utilities, and supportive communities. Imbalances in these resources can stress local stability.'
          },
          {
            id: 'sci2-7-2',
            number: 2,
            title: 'Addiction, Media and Cyber Diseases',
            summary: 'Excessive device use can lead to sedentary behaviors and mental fatigue. Peer pressure and modern media can foster behavioral dependencies that impact adolescent social development.'
          },
          {
            id: 'sci2-7-3',
            number: 3,
            title: 'Stress Relief & Mental Welfare',
            summary: 'Effective stress relief methods include regular exercise, pursuing hobbies, and practicing mindfulness. Collaborative games, team sports, and academic counseling help build emotional resilience.'
          }
        ]
      }
    ]
  },
  {
    id: 'history',
    name: 'History & Political Science',
    code: 'history',
    chaptersCount: 8,
    chapters: [
      {
        id: 'historiography',
        number: 1,
        title: 'Historiography: Development in West',
        duration: '20m 30s',
        topics: [
          {
            id: 'hist-1-1',
            number: 1,
            title: 'Scientific Method in Historical Research',
            summary: 'History uses scientific frameworks to verify records. Researchers analyze physical relics, linguistic clues, and matching texts to analyze past events.'
          },
          {
            id: 'hist-1-2',
            number: 2,
            title: 'Notable Scholars and Traditions',
            summary: 'Scholars like Voltaire, Hegel, and Marx shaped modern historical analysis. They introduced dialects and social theories that look beyond simple retellings of ruler timelines.'
          }
        ]
      },
      {
        id: 'mass-awakening',
        number: 2,
        title: 'Mass Awakening & Reform Movements',
        duration: '19m 15s',
        topics: [
          {
            id: 'hist-2-1',
            number: 1,
            title: 'Key Social Reforms in Maharashtra',
            summary: 'Reformers like Jotirao Phule and Savitribai Phule worked to expand access to education and support marginalized groups, challenging outdated social divides.'
          },
          {
            id: 'hist-2-2',
            number: 2,
            title: 'Role of the Press in Awakening',
            summary: 'Early publications and local materials helped share ideas of self-governance. They connected distant communities, building shared awareness around colonial challenges.'
          }
        ]
      },
      {
        id: 'struggle-independence',
        number: 3,
        title: 'Struggle for Independence',
        duration: '25m 00s',
        topics: [
          {
            id: 'hist-3-1',
            number: 1,
            title: 'Revolutionary Phase & Satyagrahas',
            summary: 'The freedom struggle included both non-violent satyagrahas and active revolutionary movements. These actions challenged colonial authorities and mobilized citizens across the country.'
          },
          {
            id: 'hist-3-2',
            number: 2,
            title: 'Quit India and Subhash Chandra Bose',
            summary: 'The Quit India Movement of 1942 united the nation in demanding self-rule. Meanwhile, Subhash Chandra Bose organized the Indian National Army to challenge colonial rule from abroad.'
          }
        ]
      },
      {
        id: 'applied-history',
        number: 4,
        title: 'Applied History of India',
        duration: '18m 45s',
        topics: [
          {
            id: 'hist-4-1',
            number: 1,
            title: 'Cultural Heritage Management',
            summary: 'Applied history focuses on preserving physical monuments, oral traditions, and archaeological sites. These conservation efforts help connect communities with their cultural roots.'
          },
          {
            id: 'hist-4-2',
            number: 2,
            title: 'Professional Opportunities & Tourism',
            summary: 'Preserving historical sites supports local economies through heritage tourism. It creates career paths in museum curation, archive management, and cultural tourism.'
          }
        ]
      },
      {
        id: 'vision-constitution',
        number: 5,
        title: 'The Vision of the Constitution',
        duration: '22m 10s',
        topics: [
          {
            id: 'hist-5-1',
            number: 1,
            title: 'Preamble and Fundamental Rights',
            summary: 'The Preamble outlines the core values of justice, liberty, equality, and fraternity. These ideas are backed by Fundamental Rights that protect individual freedoms.'
          },
          {
            id: 'hist-5-2',
            number: 2,
            title: 'Directive Principles & Secular Blueprint',
            summary: 'The Directive Principles guide the state in designing welfare policies. They establish a secular framework to ensure fair treatment for all religious and cultural communities.'
          }
        ]
      },
      {
        id: 'electoral-process',
        number: 6,
        title: 'The Indian Electoral Process',
        duration: '21m 00s',
        topics: [
          {
            id: 'hist-6-1',
            number: 1,
            title: 'Election Commission of India (ECI)',
            summary: 'The ECI is an independent body that manages national and state elections. It sets the rules that ensure voting is conducted fairly and transparently.'
          },
          {
            id: 'hist-6-2',
            number: 2,
            title: 'Electoral Reforms & Code of Conduct',
            summary: 'Reforms like introducing EVMs have made voting more secure and efficient. The Model Code of Conduct sets guidelines to maintain fair play during campaigns.'
          }
        ]
      },
      {
        id: 'political-parties',
        number: 7,
        title: 'Political Parties: National & Regional',
        duration: '20m 30s',
        topics: [
          {
            id: 'hist-7-1',
            number: 1,
            title: 'Party Ideologies & Coalition Era',
            summary: 'Political parties unite groups around shared social and economic goals. The rise of coalition governments has made consensus-building key to policy-making.'
          },
          {
            id: 'hist-7-2',
            number: 2,
            title: 'Evolution of Regional Parties',
            summary: 'Regional parties bring localized concerns to national attention. They ensure regional identity and local needs are represented in broader policy discussions.'
          }
        ]
      },
      {
        id: 'challenges-democracy',
        number: 8,
        title: 'Challenges to Democracy',
        duration: '18m 50s',
        topics: [
          {
            id: 'hist-8-1',
            number: 1,
            title: 'Combating Casteism & Corruption',
            summary: 'Inequality and corruption can undermine democratic institutions. Ensuring transparent governance and equal access to opportunities helps strengthen trust in public systems.'
          },
          {
            id: 'hist-8-2',
            number: 2,
            title: 'Communalism and the Way Forward',
            summary: 'Social divides require proactive community dialogue and secular constitutional protections. Strengthening public education and civic involvement helps support a cohesive society.'
          }
        ]
      }
    ]
  },
  {
    id: 'geography',
    name: 'Geography of India',
    code: 'geography',
    chaptersCount: 6,
    chapters: [
      {
        id: 'field-visit',
        number: 1,
        title: 'Field Visit',
        duration: '15m 10s',
        topics: [
          {
            id: 'geog-1-1',
            number: 1,
            title: 'Methodology & Planning',
            summary: 'Field visits allow students to gather firsthand geographical data. Planning involves choosing a study site, preparing questionnaires, and selecting tools like maps and GPS.'
          },
          {
            id: 'geog-1-2',
            number: 2,
            title: 'Data Collection & Report Writing',
            summary: 'During visits, students record observations, take photos, and collect samples. They organize these findings into field reports that explain human-environmental interactions.'
          }
        ]
      },
      {
        id: 'geographical-investigations',
        number: 2,
        title: 'Geographical Investigations',
        duration: '17m 45s',
        topics: [
          {
            id: 'geog-2-1',
            number: 1,
            title: 'Map Reading & Comparative Analysis',
            summary: 'Reading maps involves analyzing scales, coordinates, and symbols. Comparing physical and administrative maps helps explain how terrain influences local infrastructure and settlement patterns.'
          },
          {
            id: 'geog-2-2',
            number: 2,
            title: 'Brazil vs India physiography comparison',
            summary: 'This analyzes the geographical features of India and Brazil. While India is defined by the Himalayas and Gangetic plains, Brazil features the Amazon basin and Brazilian highlands.'
          }
        ]
      },
      {
        id: 'natural-resources',
        number: 3,
        title: 'Natural Resources of India',
        duration: '21m 30s',
        topics: [
          {
            id: 'geog-3-1',
            number: 1,
            title: 'River Systems and Drainage',
            summary: 'India is drained by major Himalayan and Peninsular river systems. These rivers support local agriculture, provide municipal water, and offer hydroelectric potential across the region.'
          },
          {
            id: 'geog-3-2',
            number: 2,
            title: 'Mineral & Forest Resources distribution',
            summary: 'Minerals and forests are distributed unevenly across India. Balancing resource extraction with forest conservation is essential to sustain local communities and ecosystems.'
          }
        ]
      },
      {
        id: 'vegetation-wildlife',
        number: 4,
        title: 'Natural Vegetation and Wildlife of India',
        duration: '20m 15s',
        topics: [
          {
            id: 'geog-4-1',
            number: 1,
            title: 'Forest Biomes (Deciduous, Evergreen)',
            summary: 'Varying rainfall patterns determine forest types, which range from wet evergreens to tropical deciduous. These diverse biomes support unique ecosystems and plant species.'
          },
          {
            id: 'geog-4-2',
            number: 2,
            title: 'Conservation Programs & Sanctuaries',
            summary: 'Programs like Project Tiger protect endangered species from habitat loss and poaching. National parks and sanctuaries help preserve genetic diversity in natural habitats.'
          }
        ]
      },
      {
        id: 'population',
        number: 5,
        title: 'Population',
        duration: '22m 10s',
        topics: [
          {
            id: 'geog-5-1',
            number: 1,
            title: 'Spatial Distribution & Density',
            summary: 'Population density is shaped by climate, water availability, and economic opportunities. Urban centers and river plains support higher population concentrations than rugged mountain regions.'
          },
          {
            id: 'geog-5-2',
            number: 2,
            title: 'Demographic Metrics (Literacy, Sex Ratio)',
            summary: 'Analyzing demographic trends reveals shifts in literacy rates and age structures. These metrics help guide public planning, medical policy, and educational programs.'
          }
        ]
      },
      {
        id: 'tourism-transport-communication',
        number: 6,
        title: 'Tourism, Transport and Communication',
        duration: '21m 40s',
        topics: [
          {
            id: 'geog-6-1',
            number: 1,
            title: 'Transport networks: Roads and Rails',
            summary: 'Transport networks are essential to support trade and travel. Roads provide local connectivity, while railways handle mass shipping and long-distance travel.'
          },
          {
            id: 'geog-6-2',
            number: 2,
            title: 'Digital Communication & Space Tech',
            summary: 'Expanding satellite systems and mobile networks has bridged geographic divides. Modern digital infrastructure supports e-governance and connects remote areas to the digital economy.'
          }
        ]
      }
    ]
  }
];

export function getSubjectPaper(id: string): SubjectPaper | undefined {
  return curriculumData.find(paper => paper.id === id);
}

export function getChapter(subjectId: string, chapterId: string) {
  const paper = getSubjectPaper(subjectId);
  if (!paper) return undefined;
  return paper.chapters.find(ch => ch.id === chapterId);
}
